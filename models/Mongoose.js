var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/foodcourt');
var db = mongoose.connection;

module.exports = db;