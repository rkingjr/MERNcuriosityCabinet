// import classes from "./CabinetCard.module.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ARTIFACT } from "../../utils/queries";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
// import Bookcase from "../../public/images/bookcase-single.jpeg";
import Auth from "../../utils/auth";
import Annotation from "../Annotation/Annotation";

const ArtifactCard = () => {
  if (Auth.loggedIn()) {
    return (
      <Container
      // style={{
      //   backgroundImage: `url(${Bookcase})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
      >
        <Card>
          {/* <Card.Img variant="top" src={image.filename} /> */}
          <Card.Body>
            {/* <Card.Title>{image.title}</Card.Title>
            <Card.Text>{image.description}</Card.Text> */}
            <Annotation />
            {/* There should be a conditional written here for buttons to appear depending on Auth and user activity */}
            {/* <Button variant="primary">Edit</Button>
            <Button variant="primary">Save</Button> */}
          </Card.Body>
        </Card>
        ))
      </Container>
    );
  }

  return (
    <Container
    // style={{
    //   backgroundImage: `url(${Bookcase})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    // }}
    >
      <Card>
        {/* <Card.Img variant="top" src={image.filename} /> */}
        <Card.Body>
          {/* <Card.Title>{image.title}</Card.Title>
          <Card.Text>{image.description}</Card.Text> */}
          <Annotation />
        </Card.Body>
      </Card>
      {/* )) */}
    </Container>
  );
};

export default ArtifactCard;
