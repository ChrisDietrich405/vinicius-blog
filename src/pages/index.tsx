import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return router.push("/signin");
  }

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.user_container}>
          <p>{session.user?.name}</p>
          <p>{session.user?.email}</p>
          <img
            src={session.user?.image as string}
            alt={session.user?.name as string}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
