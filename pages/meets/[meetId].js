// meets/:meetId
import { Card, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
const DetailPage = (props) => {
  const router = useRouter();
  const goBackHandler = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Meetups | {props.meetupData.title}</title>
      </Head>
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
    </>
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
    fallback: "blocking",
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
