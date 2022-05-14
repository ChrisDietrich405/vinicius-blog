import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  console.log(router);

  useEffect(() => {
    if (!session) {
      router.push("/signin");
    }
  }, [session]);

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.user_container}>
          <div className={styles.image_container}>
            <img
              src={session!.user?.image as string}
              alt={session!.user?.name as string}
            />
          </div>
          <div className={styles.userInfo_container}>
            <p>{session!.user?.name}</p>
            <p>{session!.user?.email}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
