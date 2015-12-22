var Bookshelf = require('bookshelf');

var config = {
   host: 'localhost',  // your host
   user: 'student', // your database user
   password: 'default', // your database password
   database: 'student',
   charset: 'UTF8_GENERAL_CI'
};

var DB = Bookshelf.initialize({
   client: 'mysql', 
   connection: config
});

module.exports.DB = DB;
