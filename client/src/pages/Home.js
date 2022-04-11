import React from "react";
import { useQuery } from "@apollo/client";

import Card from "react-bootstrap/Card";
import classes from "../components/HomeCard/Homecard.module.css";
import HomeCard from "../components/HomeCard/HomeCard";
import BlankCubby from "../components/BlankCubby/BlankCubby";

import { QUERY_COLLECTIONS } from "../utils/queries";
import Auth from "../utils/auth";

const Home = () => {
  const { loading, data } = useQuery(QUERY_COLLECTIONS);
  const collections = data?.collections || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-6">
          {loading ? (
            <Card className={classes.card}>
              <h4 className={classes.cardheader}>Loading collections...</h4>
            </Card>
          ) : (
            // This should map the array of the component, Cubby, with data from the cabinetsData representing exising collections in the db
            <HomeCard collections={collections} />
          )}
          {/* There should be an additional Cubby that invites the user to login and upload  */}
          {Auth.loggedIn() ? <></> : <>{<BlankCubby />}</>}
        </div>
      </div>
    </main>
  );
};

export default Home;
