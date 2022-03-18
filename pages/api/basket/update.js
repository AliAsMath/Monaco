import mongoConnectedClient from "../../../util/database";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  if (req.method !== "PUT") return;

  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  const basket = req.body.basket;

  let client;
  try {
    client = await mongoConnectedClient();
    const db = client.db();

    await db
      .collection("user")
      .updateOne({ email: session.user.email }, { $set: { basket } });

    res.status(201).json({ message: "Basket update!" });
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
};

export default handler;
