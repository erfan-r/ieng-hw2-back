var mongoose = require('mongoose')
var database = require('../database')
var field = require('../models/field')
const submittedSchema = new mongoose.Schema({
  username : String,
  fields : [field.schema]
})

const SubmittedForm = mongoose.model('SubmittedForm', submittedSchema)

module.exports = SubmittedForm;