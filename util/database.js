const { MongoClient } = require("mongodb");

const mongoConnectedClient = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.uokpz.mongodb.net/Monako?retryWrites=true&w=majority`
  );
  return client;
};

module.exports = mongoConnectedClient;
