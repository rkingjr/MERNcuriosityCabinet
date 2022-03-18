import classes from "./Homecard.module.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";

const HomeCard = ({ images }) => {
  return (
    <Container
      style={{
        display: "flex",
        flexFlow: "column wrap",
        alignContent: "flex-start";
        alignItems: "center";
      }}
    >
      {images &&
        images.map((image) => (
          <div className={classes.cubby} key={image._id}>
            <Row xs={12} md={6}>
              <Col>
                <Card className={classes.card}>
                  <Link className="text-dark" to={`/artifact/${image._id}`}>
                    <img
                      className={classes.img}
                      variant="top"
                      src={`/images/${image.filename}`}
                      alt="cardImage"
                    />
                    <h4 className={classes.cardheader}>{image.title}</h4>
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
