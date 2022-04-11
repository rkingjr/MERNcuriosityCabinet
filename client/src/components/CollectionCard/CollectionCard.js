import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import classes from "./Collectioncard.module.css";
// import CollectionCard from "../components/CollectionCard/CollectionCard";
// import BlankCubby from "../components/BlankCubby/BlankCubby";

import { QUERY_COLLECTION } from "../../utils/queries";
// import Auth from "../utils/auth";

const CollectionCard = () => {
  const { collectionID } = useParams();
  const { data } = useQuery(QUERY_COLLECTION, {
    // pass URL parameter
    variables: { collectionID: collectionID },
  });
  const collectionData = data?.collection || {};

  return (
    <Container
      style={{
        display: "flex",
        flexFlow: "column wrap",
        alignContent: "flex-start",
        alignItems: "center",
      }}
    >
      {collectionData.images &&
        collectionData.images.map((image) => (
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

export default CollectionCard;
