// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;

const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const {User, validate, loginValidate} = require("../src/models/users.model");
const express = require("express");
const router = express.Router();

router.get("/current", auth, async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
});

router.post("/", async (req, res) => {
    // validate the request body first
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //find an existing user
    let user = await User.findOne({email: req.body.email});
    if (user) return res.status(400).json({status: "User already registered."});
    let pass = req.body.secret;
    let em = req.body.email.toLowerCase();
    user = new User({
        name: req.body.name,
        password: req.body.password,
        email: em
    });
    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.salt = salt;
    if (pass === "Admin") {
        user.isAdmin = true
    }
    await user.save();

    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send({
      status: "OK",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        access_token: token
      }
    });
});

router.post("/login", async (req, res) => {
    // validate the request body first
    const {error} = loginValidate(req.body);
    if (error) return res.status(400).json({status: error.details[0].message});

    //find an existing user
    let user = await User.findOne({email: req.body.email.toLowerCase()});
    if (!user) return res.status(401).json({status: "User Not Found!"});
    let pass = await bcrypt.hash(req.body.password, user.salt);
    if (user.password === pass) {
        const token = user.generateAuthToken();
        res.header("x-auth-token", token).json({
            status: "OK",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                access_token: token
            }
        });
    } else {
        return res.status(401).json({status: "Wrong Password!"});
    }


});
module.exports = router;