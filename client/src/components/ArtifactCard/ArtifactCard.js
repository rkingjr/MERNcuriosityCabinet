// import classes from "./CabinetCard.module.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { QUERY_ARTIFACT } from "../../utils/queries";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
// import Bookcase from "../../../public/images/bookcase-single.jpeg";
// import { useParams } from "react-router";
import Auth from "../../utils/auth";

const ArtifactCard = () => {
  // This pulls single artifact via params and query hooks...code is probably not quite right yet!
  const { imageID } = useParams();

  const { loading, data } = useQuery({
    variables: { imageID: imageID },
  });

  const image = data?.image || {};

    // Need to add additional condition that userID matches the one attached to the artifact
    if (Auth.loggedIn()) {
        return (
            <Container style={{ backgroundImage: `url(${Bookcase})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <Card key={image._id} >
                    <Card.Img variant="top" src={image.filepath} />
                    <Card.Body>
                        <Card.Title>{image.title}</Card.Title>
                        <Card.Text>
                            {image.description}
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>By: {image.user.name}</ListGroupItem>
                            <ListGroupItem>    {image.user.title}</ListGroupItem>
                            <ListGroupItem>    {image.user.affiliation}</ListGroupItem>
                        </ListGroup>
                        {/* There should be a conditional written here for buttons to appear depending on Auth and user activity */}
                        {/* Add onclick function for edit to direct user to page for editing & function for save to update data in db */}
                        <Button variant="primary">Edit</Button>
                        <Button variant="primary">Save</Button>
                    </Card.Body>
                </Card>
                    ))
            </Container>
        )
    }

  if (Auth.loggedIn()) {
    return (
        <Container style={{ backgroundImage: `url(${Bookcase})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Card key={image._id}>
                <Card.Img variant="top" src={image.filepath} />
                <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                    <Card.Text>
                        {image.description}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>By: {image.user.name}</ListGroupItem>
                        <ListGroupItem>    {image.user.title}</ListGroupItem>
                        <ListGroupItem>    {image.user.affiliation}</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
                ))
        </Container>
    )
}


export default ArtifactCard;
