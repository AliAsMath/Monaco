const { MongoClient } = require("mongodb");

class DB {
  constructor() {
    this.client;
    this.db;
  }

  async connect(databaseName) {
    this.client = await MongoClient.connect(
      "mongodb+srv://farshid:AZC8aYHlvAjaVafr@cluster0.uokpz.mongodb.net/"
    );
    this.db = this.client.db(databaseName);
  }

  async fetchAllData(collectionName) {
    const data = await this.db.collection(collectionName).find({}).toArray();
    const dataIdString = data.map((document) => {
      const _id = document._id.toString();
      const product = { ...document, _id };
      return product;
    });
    this.close();
    return dataIdString;
  }

  async findData(conditions, collectionName) {
    const data = await this.db
      .collection(collectionName)
      .find(conditions)
      .toArray();
    this.close();
    return data;
  }

  async insertData(data, collectionName) {
    if (data.length > 1) {
      await this.db.collection(collectionName).insertMany(data);
    } else {
      await this.db.collection(collectionName).insertOne(data);
    }
    this.close();
  }

  async delete(id, collectionName) {
    await this.db.collection(collectionName).deleteOne({ _id: id });
    this.close();
  }

  async update(data, collectionName) {
    this.db.collection(collectionName).updateOne(
      { _id: data._id },
      {
        $set: { ...data },
      }
    );
    this.close();
  }

  close() {
    this.client.close();
  }
}

module.exports = DB;
