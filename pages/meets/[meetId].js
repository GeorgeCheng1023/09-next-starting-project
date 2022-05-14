// meets/:meetId
import { Card, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";

const DetailPage = (props) => {
  const router = useRouter();
  const goBackHandler = () => {
    router.push("/");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={props.meetupData.image} />
          <Card.Body>
            <Card.Title>{props.meetupData.title}</Card.Title>
            <Card.Text>{props.meetupData.description}</Card.Text>
            <Button variant="primary" onClick={goBackHandler}>
              Back
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export async function getStaticPaths() {
  const uri =
    "mongodb+srv://first-user:AsFuwhwEU8Se3PNy@cluster0.go7g6.mongodb.net/meetups?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const allMeetupId = await meetupsCollection.find({}, { _id: 1 }).toArray();
  // client.close();
  return {
    fallback: false,
    paths: allMeetupId.map((meetup) => ({
      params: { meetId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetId = context.params.meetId;

  const uri =
    "mongodb+srv://first-user:AsFuwhwEU8Se3PNy@cluster0.go7g6.mongodb.net/meetups?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const foundMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetId),
  });

  console.log(foundMeetup);
  console.log(meetId);

  client.close();

  return {
    props: {
      // meetupData: {
      //   title: "test",
      //   image:
      //     "https://images.unsplash.com/photo-1652099797715-3eaccba128f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      //   description: "Some description",
      // },
      meetupData: {
        id: foundMeetup._id.toString(),
        title: foundMeetup.title,
        description: foundMeetup.description,
        image: foundMeetup.image,
      },
    },
  };
}

export default DetailPage;
