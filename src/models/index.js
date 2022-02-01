const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = config.db_url;
db.tutorials = require('./tutorial.model')(mongoose);

module.exports = db;
