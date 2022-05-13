<<<<<<< HEAD
// /meets/new
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetPage = () => {
  return (
    <>
      <NewMeetupForm />
=======
import NewMeetsupForm from "../../components/meetups/NewMeetupForm";

const NewMeetsPage = (props) => {
  const addMeetupHandler = async (enteredMeetup) => {
    const response = await fetch("/api/new-meetsup", {
      method: "POST",
      body: JSON.stringify(enteredMeetup),
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <NewMeetsupForm onAddMeetup={addMeetupHandler} />
>>>>>>> 309f6b425d3ae08b6ce87cc94c2bc73136f8fc67
    </>
  );
};

<<<<<<< HEAD
export default NewMeetPage;
=======
export default NewMeetsupForm;
>>>>>>> 309f6b425d3ae08b6ce87cc94c2bc73136f8fc67
