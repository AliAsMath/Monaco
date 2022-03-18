import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoConnectedClient from "../../../util/database";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcryptjs";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;

        const client = await mongoConnectedClient();
        const db = client.db();

        const user = await db.collection("user").findOne({ email });
        if (!user) {
          client.close();
          throw new Error("user not exist");
        }
        const isValidPassword = await compare(password, user.password);
        if (!isValidPassword) {
          client.close();
          throw new Error("Incorect password");
        }

        client.close();

        return { email };
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  secret: process.env.JWT_SECRET,
});
