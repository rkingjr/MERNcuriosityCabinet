import classes from './Homecard.module.css';
import Container from "react-bootstrap/Container";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const HomeCard = ({ images }) => {
  return (
    <Container style={{justifyContent: "center", marginLeft: 'auto', marginRight: 'auto'}}>
      {images &&
        images.map((image, index) => (
          <div className={classes.cubby} key={index}>
            <Row xs={12} md={6}>
              <Col>
                <Card className={classes.card}>
                <Link className="text-dark" to="/cabinet/:cabinetID">
                  <img className={classes.img} variant="top" src={`/images/${image.filename}`} />
                  <h4 className={classes.cardheader} >{image.title}</h4>
                  {/* <Card.Text>{image.description}</Card.Text> */}
                  </Link>
                </Card>
              </Col>
            </Row>
          </div>
        ))}
    </Container>
  );
};

export default HomeCard;

//
