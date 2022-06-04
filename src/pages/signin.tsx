import { GithubButton } from "components/GithubButton";
import React, { useState, FormEvent, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignIn = () => {
  const [email, setEmail] = useState("");

  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <form onSubmit={handleSubmit}>
      <GithubButton />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;
