const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dataBase = "e-comm";

async function dbConnect() {
  let result = await client.connect();
  db = result.db(dataBase);
  return db.collection('product');
}
module.exports=dbConnect;