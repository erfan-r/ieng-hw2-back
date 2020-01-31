var mongoose = require('mongoose')
var database = require('../database')
var field = require('../models/field')
var submitted_form = require('../models/submitted_form')
const formSchema = new mongoose.Schema({
    title : String,
    fields: [field.schema],
    submitted_forms: [ submitted_form.schema],
})
//
// formSchema.statics.to_string = (form) => {
//     return {
//         title: form.text,
//         time_created: form.time_created,
//         fields: form.time_created,
//     }
// }

const Form = mongoose.model('Form', formSchema)
module.exports = Form;