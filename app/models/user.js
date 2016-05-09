// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    fName: String,
    lName: String,
    Title: String,
    Sex: String,
    Age: String,
    id: String,
});

module.exports = mongoose.model('User', BearSchema);
