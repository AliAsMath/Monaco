import { getSession } from "next-auth/react";
import mongoConnectedClient from "../../../util/database";

const handler = async (req, res) => {
  if (req.method !== "GET") return;

  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  let client;
  let basket;

  try {
    client = await mongoConnectedClient();
    const user = await client
      .db()
      .collection("user")
      .findOne({ email: session.user.email }, { basket: 1 });

    basket = user.basket.map((product) => {
      const _id = product._id.toString();
      return { ...product, _id };
    });

    res.status(200).json({ basket });
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
};

export default handler;
