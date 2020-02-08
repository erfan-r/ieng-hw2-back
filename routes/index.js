const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const bodyParser = require('body-parser')
const auth = require('../middleware/auth')
const form = require('../src/models/form')
const field = require('../src/models/field')
let map = require('../map.json')
let converter = require('json-2-csv');
const geoPolygon = require('point-in-geopolygon')
const submitted_form = require('../src/models/submitted_form')
const {User} = require('../src/models/users.model')

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended: false}))

// parse application/json
router.use(bodyParser.json())
let result = []
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
    if (err) res.error()
    res.json({'forms': forms})
  })

})
router.get('/api/forms/:id', auth, function (req, res, next) {
  result = {}
  form.findById(req.params.id, async function (err, form) {
    res.json(form)
  })

})

router.get('/api/forms/:id/list/:sId', auth, async function (req, res, next) {
  const user = await User.findById(req.user._id).select('-password')
  if (user.isAdmin) {
    result = {}
    console.log(req.params.sId)
    submitted_form.findById(req.params.sId, function (err, form) {
      res.json(form)
    })
  } else {
    next(createError(403))
  }

})

router.get('/api/forms/:id/list/:sId/csv', auth, async function (req, res, next) {
  const user = await User.findById(req.user._id).select('-password')
  if (user.isAdmin) {
    result = {}
    console.log(req.params.sId)
    submitted_form.findById(req.params.sId, function (err, form) {
      csv2jsonAsync(form, {})
        .then((result) => { res.send(result) })
        .catch((err) => { next(createError(500))});
    })
  } else {
    next(createError(403))
  }

})


//TODO Fill this function
router.delete('/api/forms/:id/list/:sId', auth, async function (req, res, next) {
  const user = await User.findById(req.user._id).select('-password')
  if (user.isAdmin) {
    res.json({'result': 'ok'})
  } else {
    next(createError(403))
  }
})

router.get('/api/forms/:id/list', auth, async function (req, res, next) {
  const user = await User.findById(req.user._id).select('-password')
  if (user.isAdmin) {
    result = {}
    console.log(req)
    form.findById(req.params.id, function (err, form) {
      res.json(form.submitted_forms)
    })
  } else {
    next(createError(403))
  }
})
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
        if (tmp.Type === 'Location') {
          result = ''
          for (let i = 0; i < map.features.length; i++) {
            console.log(req.query.lat)
            console.log(map.features[i])
            if (geoPolygon.polygon(map.features[i].geometry.coordinates, [0, 0])) {
              result += (map.features[i].properties.name)
            }
            tmp.Value += result
          }
          console.log(tmp.value)
        }
        sf.fields.push(new field({name: tmp.Name, title: tmp.Title, type: tmp.Type, value: tmp.Value}))
      }
      sf.save()
      form.submitted_forms.push(sf)
      form.save()
      res.json(form)
    }
  })
})

router.post('/api/forms', auth, function (req, res, next) {
  // console.log(req.body);
  new_form = new form({title: req.body.title, fields: [], submitted_forms: []})
  for (let i = 0; i < req.body.fields.length; i++) {
    let tmp = req.body.fields[i]
    new_form.fields.push(new field({name: tmp.name, title: tmp.title, type: tmp.type, required: tmp.required}))
  }
  new_form.save()
  res.json(new_form.fields)
})


// GeoJson
router.get('/api/gis/testpoint', function (req, res, next) {
  result = ''
  for (let i = 0; i < map.features.length; i++) {
    console.log(req.query.lat)
    console.log(map.features[i])
    if (geoPolygon.polygon(map.features[i].geometry.coordinates, [0, 0])) {
      result += (map.features[i].properties.name)
    }
    res.json(result)
  }
})

router.put('/api/gis/addpolygon', function (req, res, next) {
  console.log(req.body)
  map.features.push(req.body)
  let fs = require('fs')
  let wr = JSON.stringify(map)
  fs.writeFile('map.json', wr, 'utf8', function (err) {

    if (err) {
      return console.log(err)
    }
    console.log(map.features)
    console.log('The file was saved!')
  })

  res.json(req.body)
})


module.exports = router
