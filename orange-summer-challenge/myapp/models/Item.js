var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Item = new schema({
    subject: String,
    createdAt: Date,

});

module.exports= mongoose.model('Item',Item);