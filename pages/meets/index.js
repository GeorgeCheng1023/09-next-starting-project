import MeetupList from "../../components/meetups/MeetupList";

const dummy_meets = [
  {
    id: "m1",
    title: "Africa",
    description: "This is Africa",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  {
    id: "m2",
    title: "Australia",
    description: "This is Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1230&q=80",
  },
];

const MeetupPage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meetups: dummy_meets,
    },
    revalidate: 10,
  };
}

export default MeetupPage;
