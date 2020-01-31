var mongoose = require('mongoose')
var database = require('../database')

const fieldSchema = new mongoose.Schema({
    name : String,
    title : String,
    type : String,
    required : Boolean,
    value : String

})

const Field = mongoose.model('Field', fieldSchema)
module.exports = Field;