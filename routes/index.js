var express = require('express');
var forms = require('../forms.json');
var router = express.Router();
var bodyParser = require('body-parser');
console.log(forms.features)
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());
let result = [];
// router.use(router.bodyParser());
/* GET home page. */
router.get('/api/forms', function (req, res, next) {
  result = { forms:[]};
  for (let i = 0; i < forms.length; i++) {
    let item = {
      id: forms[i].id,
      title: forms[i].title
    }
    result.forms.push(item)
    // res.json(result)
  }
  res.send(result)
  // res.render('index', {title: 'Express'});

});
router.get('/api/forms/:id', function (req, res, next) {
  result = {};
  console.log(req)
  for (let i = 0; i < forms.length; i++) {
    if (forms[i].id === req.params.id)
      result = forms[i]
    // res.json(result)
  }
  res.send(result)
  // res.render('index', {title: 'Express'});

});

router.get('/api/forms/:id/show', function (req, res, next) {
  result = {};
  console.log(req)
  for (let i = 0; i < forms.length; i++) {
    if (forms[i].id === req.params.id)
      result = forms[i]
    // res.json(result)
  }
  res.send(result)
  // res.render('index', {title: 'Express'});
});

/* GET home page. */
router.post('/api/forms/:id', function (req, res, next) {
  console.log(req.body);
  // forms.features.push(req.body);
  // let fs = require('fs');
  // let wr = JSON.stringify(data);
  // fs.writeFile("data.json", wr, 'utf8', function(err) {
  //   if(err) {
  //     return console.log(err);
  //   }
  //   console.log("The form data was saved!");
  // });

  res.json(req.body);
});

// router.post('/api/forms/:id', function (req, res, next) {
//   console.log(req.body);
//   forms.features.push(req.body);
//   let fs = require('fs');
//   let wr = JSON.stringify(data);
//   fs.writeFile("data.json", wr, 'utf8', function(err) {
//     if(err) {
//       return console.log(err);
//     }
//     console.log("The form data was saved!");
//   });
//
//   res.json(req.body);
// });

module.exports = router;
