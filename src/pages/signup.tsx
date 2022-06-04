import { GithubButton } from "components/GithubButton";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (email && firstName) {
      await axios.post("/api/users", { email, firstName });
      return router.push("/");
    }
    toast.error("Please, type an email and firstName");
  };

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <GithubButton />
        <input
          type="text"
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <button type="submit">Submit</button>
      </form>
      <span>
        Already have an account?
        <Link href="/signin">Go to Log in Page</Link>
      </span>
    </>
  );
};

export default SignUp;
