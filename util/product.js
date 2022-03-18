const DB = require("./database");
const db = new DB();
class Product {
  constructor(data) {
    this.data = data;
  }

  async save() {
    await db.connect();
    await db.insertData(this.data);
  }

  async delete() {
    await db.connect();
    await db.delete(this.data._id);
  }

  async update() {
    await db.connect();
    db.update(this.data);
  }
}

module.exports = Product;
