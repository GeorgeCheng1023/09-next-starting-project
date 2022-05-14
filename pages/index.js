import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/meets");
  }, []);
  return (
    <>
      <Head>
        <title>Meetups | Home</title>
      </Head>
      <h1>Welcome to meetups page</h1>
    </>
  );
};

export default HomePage;
