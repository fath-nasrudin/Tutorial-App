require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3030,
  db_url: process.env.MONGODB_URI,
};
