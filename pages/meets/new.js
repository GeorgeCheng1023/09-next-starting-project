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
    </>
  );
};

export default NewMeetsupForm;
