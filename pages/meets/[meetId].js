<<<<<<< HEAD
// meets/:meetId
import { Card, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const goBackHandler = () => {
    router.push("/");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Card style={{ width: "30rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1652099797715-3eaccba128f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={goBackHandler}>
              Back
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
=======
import { useRouter } from "next/router";

const DetailPage = (props) => {
  const router = useRouter();
  return <h1>The DetailPage</h1>;
>>>>>>> 309f6b425d3ae08b6ce87cc94c2bc73136f8fc67
};

export default DetailPage;
