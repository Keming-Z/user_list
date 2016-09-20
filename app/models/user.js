// app/models/bear.js

var mongoose     = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    fName: String,
    lName: String,
    Title: String,
    Sex: String,
    Age: String,
    id: String,
});

BearSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', BearSchema);
