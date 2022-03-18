import { getSession } from "next-auth/react";
import mongoConnectedClient from "../../../util/database";
import { hash } from "bcryptjs";

const handler = async (req, res) => {
  if (req.method !== "PATCH") return;

  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  const { password, repassword } = req.body;

  if (password !== repassword) {
    res.status(403).json({ message: "Password not match" });
    return;
  }

  const hashedPassword = await hash(password, 12);

  let client;
  try {
    client = await mongoConnectedClient();
    const db = client.db();

    await db.collection("user").updateOne(
      { email: session.user.email },
      { $set: { password: hashedPassword } }
    );

    res.status(201).json({ message: "Change password!" });
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
};

export default handler;
