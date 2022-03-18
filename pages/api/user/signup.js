import mongoConnectedClient from "../../../util/database";
import { hash } from "bcryptjs";

const handler = async (req, res) => {
  if (req.method !== "POST") return;

  const { email, password } = req.body;
  console.log(email, password);

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid email or password!" });
    return;
  }

  let client;
  try {
    client = await mongoConnectedClient();
    const db = client.db();

    const existingUser = await db.collection("user").findOne({ email });
    if (existingUser) {
      res.status(422).json({ message: "User existing alredy!" });
      throw new Error("user existing already");
    }

    const hashPassword = await hash(password, 12);
    await db.collection("user").insertOne({ email, password: hashPassword });
    res.status(201).json({ message: "Created user!" });
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
};

export default handler;
