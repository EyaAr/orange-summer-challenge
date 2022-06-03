var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Admin = new Schema({
    password: String,
    email: String,
    createdAt: Date   
});

module.exports= mongoose.model('Admin',Admin);