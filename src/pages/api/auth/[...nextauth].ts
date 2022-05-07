import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { fauna } from "services/fauna";
import { query as q } from "faunadb";

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
      const { email } = user;
      console.log(user);
      try {
        await fauna.query(q.Create(q.Collection("users"), { data: email }));
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
