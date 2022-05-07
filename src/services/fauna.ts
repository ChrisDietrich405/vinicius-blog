import { Client } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNADB_SECRET_KEY as string,
  domain: "db.us.fauna.com",
  scheme: "https",
});
