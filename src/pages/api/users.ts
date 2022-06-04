import { NextApiResponse, NextApiRequest } from "next";
import { fauna } from "services/fauna";
import { query as q } from "faunadb";

import createUser from "./_lib/createUser";

// We are doing something like that (express - Node example):
// const app = express();
// app.post("/users")

const users = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, firstName } = req.body;
    const user = await createUser({ email, firstName });

    return res.status(201).json({ user });
    //query is a method to instantiate a new database consultation
    // a way to change/update information in a database
    //this code block adds a new user to the fauna database
  }

  return res.status(400).json({ error: "Unhandled method" });
};

export default users;
