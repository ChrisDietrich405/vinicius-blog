import { fauna } from "services/fauna";
import { query as q } from "faunadb";

interface CreateUserInterface {
  email: string;
  firstName: string;
}

export default async function createUser({
  email,
  firstName,
}: CreateUserInterface) {
  console.log({ email, firstName });
  try {
    const user = await fauna.query(
      q.If(
        q.Not(
          q.Exists(
            q.Match(
              // "where". Always receive an Index
              q.Index("user_by_email"),
              q.Casefold(email!) // "toLowerCase"
            )
          )
        ) /*true? (user doesn't exists)**/,
        q.Create(q.Collection("users"), {
          data: { email, firstName },
        }) /*false (user exists)?*/,
        q.Get(q.Match(q.Index("user_by_email"), q.Casefold(email!)))
      )
    );
    return user;
  } catch (err) {
    console.log("ERROR FOUND", { err });
  }
}
