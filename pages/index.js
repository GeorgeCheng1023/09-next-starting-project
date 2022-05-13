import { useRouter } from "next/router";
import { useEffect } from "react";
const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/meets");
  }, []);
  return <h1> Welcome</h1>;
};

export default HomePage;
