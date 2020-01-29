var mongoose = require('mongoose')
var database = require('../database')

const submittedSchema = new mongoose.Schema({
  form_id : Number,
  title : String,
  type : String,
  value : String,
})

const SubmittedForm = mongoose.model('SubmittedForm', fieldSchema)

module.exports = SubmittedForm;