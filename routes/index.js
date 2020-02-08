var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var bodyParser = require('body-parser');
const auth = require("../middleware/auth");
var form = require('../src/models/form')
var field = require('../src/models/field')
var submitted_form = require('../src/models/submitted_form')
const {User} = require("../src/models/users.model");

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended: false}));

// parse application/json
router.use(bodyParser.json());
let result = [];
// router.use(router.bodyParser());
/* GET home page. */
// router.get("/current", auth, async (req, res) => {
//   const user = await User.findById(req.user._id).select("-password");
//   res.send(user);
// });

router.get('/api/forms', auth, function (req, res, next) {
    form.find({}, '_id title ', function (err, forms) {
        console.log('GOTchaaaaa')
        // users.forEach(function(user) {
        //   userMap[user._id] = user;
        // });
        res.json({"forms": forms});
    });

});
router.get('/api/forms/:id', auth, function (req, res, next) {
    result = {};
    form.findById(req.params.id, async function (err, form) {
        res.json(form)
    });

});

router.get('/api/forms/:id/list/:sId', auth, async function (req, res, next) {
    const user = await User.findById(req.user._id).select("-password");
    if (user.isAdmin) {
        result = {};
        console.log(req.params.sId)
        submitted_form.findById(req.params.sId, function (err, form) {
            res.json(form)
        });
    } else {
        next(createError(403))
    }

});

//TODO Fill this function
router.delete('/api/forms/:id/list/:sId', auth, async function (req, res, next) {
    const user = await User.findById(req.user._id).select("-password");
    if (user.isAdmin) {
        res.json({"result": "ok"})
    } else {
        next(createError(403))
    }
});

router.get('/api/forms/:id/list', auth, async function (req, res, next) {
    const user = await User.findById(req.user._id).select("-password");
    if (user.isAdmin) {
        result = {};
        console.log(req)
        form.findById(req.params.id, function (err, form) {
            res.json(form.submitted_forms)
        });
    } else {
        next(createError(403))
    }
});
/* GET home page. */
router.post('/api/forms/:id', auth, async function (req, res, next) {
    // console.log(req.body);
    await form.findById(req.params.id, function (err, form) {
        console.log(form)
        if (err) {
            console.error(err)
        } else {
            let tmp_fields = []
            let sf = new submitted_form({username: req.body.username, fields: []})
            for (let i = 0; i < req.body.fields.length; i++) {
                let tmp = req.body.fields[i]
                if (tmp.Type === "Loc")
                    tmp.Value = "Tehran" // TODO: add point in polygon things here
                sf.fields.push(new field({name: tmp.Name, title: tmp.Title, type: tmp.Type, value: tmp.Value}))
            }
            sf.save()
            form.submitted_forms.push(sf)
            form.save()
            res.json(form)
        }
    });
});

router.post('/api/forms', auth, function (req, res, next) {
    // console.log(req.body);
    new_form = new form({title: req.body.title, fields: [], submitted_forms: []})
    for (let i = 0; i < req.body.fields.length; i++) {
        let tmp = req.body.fields[i]
        new_form.fields.push(new field({name: tmp.name, title: tmp.title, type: tmp.type, required: tmp.required}))
    }
    new_form.save()
    res.json(new_form.fields);
});

module.exports = router;
