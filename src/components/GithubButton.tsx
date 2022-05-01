import { useSession, signIn } from "next-auth/react";

export const GithubButton = () => {
  const { data: session } = useSession();
  console.log(session);
  return <button onClick={() => signIn("github")}>Github</button>;
};
