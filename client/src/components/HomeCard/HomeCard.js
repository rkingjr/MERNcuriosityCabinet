import classes from "./Homecard.module.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";

const HomeCard = ({ collections }) => {
  return (
    <Container
      style={{
        display: "flex",
        flexFlow: "column wrap",
        alignContent: "flex-start",
        alignItems: "center",
      }}
    >
      {collections &&
        collections.map((collection) => (
          <div className={classes.cubby} key={collection._id}>
            <Row xs={12} md={6}>
              <Col>
                <Card className={classes.card}>
                  <Link
                    className="text-dark"
                    to={`/collection/${collection._id}`}
                  >
                    {collection.images.length > 0 ? (
                      <>
                        <img
                          className={classes.img}
                          variant="top"
                          src={`/images/${collection.images[0].filename}`}
                          alt="cardImage"
                        />
                      </>
                    ) : (
                      <img
                        className={classes.img}
                        variant="top"
                        src="/images/bookcase-single.jpeg"
                        alt="cardImage"
                      />
                    )}
                    <h4 className={classes.cardheader}>{collection.title}</h4>
                    <Card.Text>{collection.description}</Card.Text>
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
