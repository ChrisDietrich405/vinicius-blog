import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { fauna } from "services/fauna";
import { query as q } from "faunadb";

import createUser from "../_lib/createUser";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "read:user, read:email",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email, name } = user;
      try {
        // await fauna.query(q.Create(q.Collection("users"), { data: { email } }));
        //registering new user for our blog app  (they are already github account holders)
        if (email && name) {
          await createUser({ email, firstName: name });
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
