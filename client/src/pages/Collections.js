import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import classes from "../components/HomeCard/Homecard.module.css";

import CollectionCard from "../components/CollectionCard/CollectionCard";
import BlankCubby from "../components/BlankCubby/BlankCubby";

import { QUERY_COLLECTION } from "../utils/queries";
import { REMOVE_COLLECTION } from "../utils/mutations";
import Auth from "../utils/auth";

const Collections = () => {
  const { collectionID } = useParams();
  const { loading, data } = useQuery(QUERY_COLLECTION, {
    // pass URL parameter
    variables: { collectionID: collectionID },
  });
  const [removeCollection] = useMutation(REMOVE_COLLECTION);
  const collectionData = data?.collection || {};

  const collection = {
    id: `${collectionData._id}`,
    title: `${collectionData.title}`,
    description: `${collectionData.description}`,
  };

  const handleDeleteCollection = async (collectionId) => {
    try {
      const { data } = await removeCollection({
        variables: { collectionId },
      });
    } catch (err) {
      console.error(err);
    }
    window.location.href = "../";
  };

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-6">
          {loading ? (
            <Card className={classes.card}>
              <h4 className={classes.cardheader}>Loading artifacts...</h4>
            </Card>
          ) : (
            // This should map the array of the component, Cubby, with data from the cabinetsData representing exising collections in the db
            <div>
              <Container
                style={{
                  justifyContent: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Card className={classes.card}>
                  <h4 className={classes.cardheader}>{collection.title}</h4>
                  <Card.Text>{collection.description}</Card.Text>
                </Card>
              </Container>
              <CollectionCard collection={collection} />
              {Auth.loggedIn() ? (
                <>
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Button
                      className="btn btn-md btn-danger"
                      onClick={() => handleDeleteCollection(collection.id)}
                    >
                      Delete this Collection!
                    </Button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          )}
          {/* There should be an additional Cubby that invites the user to login and upload  */}
          {Auth.loggedIn() ? <></> : <>{<BlankCubby />}</>}
        </div>
      </div>
    </main>
  );
};

export default Collections;
