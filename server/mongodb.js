const mongo = require("mongodb");
const dbConfig = require('../config/keys.js').mongoURI;

const MongoClient = mongo.MongoClient;


module.exports = function(app) {
  if (typeof dbConfig !== 'string') {
    throw new TypeError('Error: Unexpected mongodb connection url');
  }

  opts = { useNewUrlParser: true };
  var property = opts.property || 'db';


  return function expressMongoDb(req, res, next) {
    var connection = MongoClient.connect(dbConfig, opts);
    connection
      .then(function (db) {
        req[property] = db.db('express_2');
                app.set('mongodb', db);
        next();
      })
      .catch(function (err) {
        connection = undefined;
        next(err);
      });
  };
};