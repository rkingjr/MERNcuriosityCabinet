// import classes from './HomeCard.module.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const HomeCard = ({ images }) => {
  return (
    <Container
      style={{
        backgroundImage: `url()`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {images &&
        images.map((image, index) => (
          <Card key={index}>
            <Card.Img variant="top" src={image.filename} />
            <Card.Body>
              <Card.Title>{image.title}</Card.Title>
              <Card.Text>{image.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
};

export default HomeCard;
