const { MongoClient } = require("mongodb");

const MongoURL =
  "mongodb+srv://raviranjan_db_user:Ravi%401234@ravijii.w9f5nbh.mongodb.net/?retryWrites=true&w=majority";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MongoURL)
    .then((client) => {
      _db = client.db("airbnb"); // fix typo
      console.log("MongoDB Connected");
      callback();
    })
    .catch((err) => {
      console.log("Error while connection to mongo", err);
    });
};

const Getdb = () => {
  if (!_db) {
    throw new Error("Database not initialized");
  }
  return _db;
};

module.exports = {
  mongoConnect,
  Getdb,
};