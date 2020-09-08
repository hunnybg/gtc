const mongoose = require('mongoose');
let debug = require('debug')('db');

module.exports = function() {
    mongoose.connect(process.env.db,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function() {
        debug(`Connected`);
      });
}