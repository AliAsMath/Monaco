const DB = require("./../../../util/database");
const ObjectId = require("mongodb").ObjectId;

const db = new DB();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const productId = new ObjectId(req.body.id);
    await db.connect("Monako");
    try {
      await db.delete(productId, "products");
    } catch (err) {
      console.log(err);
    }
    res.status(201).json({ message: "delete!" });
  }
};

module.exports = handler;
