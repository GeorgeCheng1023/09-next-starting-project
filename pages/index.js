<<<<<<< HEAD
import MeetupList from "../components/meetups/MeetupList";

const dummy_meetup = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1652099797715-3eaccba128f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Scene",
    address: "South Africa",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1652099797715-3eaccba128f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Scene",
    address: "South Africa",
  },
];

const HomePage = () => {
  return <MeetupList meetups={dummy_meetup} />;
=======
import { useRouter } from "next/router";
import { useEffect } from "react";
const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/meets");
  }, []);
  return <h1> Welcome</h1>;
>>>>>>> 309f6b425d3ae08b6ce87cc94c2bc73136f8fc67
};

export default HomePage;
