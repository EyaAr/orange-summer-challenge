var mongoose = require('mongoose');
var schema = mongoose.Schema;

var User = new schema({
    firstname: String,
    lastname: String,
    email: String,
    address: String,
    password: String,
    createdAt: Date,
   
   
    
});

module.exports= mongoose.model('User',User);