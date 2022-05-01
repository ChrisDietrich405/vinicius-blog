import { GithubButton } from "components/GithubButton";
import React, { useState, FormEvent } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <GithubButton />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;
