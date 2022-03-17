import React from "react";
import { useQuery } from "@apollo/client";

import HomeCard from "../components/HomeCard/HomeCard";
import BlankCubby from "../components/BlankCubby/BlankCubby";

import { QUERY_IMAGES } from "../utils/queries";
import Auth from "../utils/auth";

const Home = () => {
  const { loading, data } = useQuery(QUERY_IMAGES);
  const images = data?.images || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-6">
          {loading ? (
            <div>Loading...</div>
          ) : (
            // This should map the array of the component, Cubby, with data from the cabinetsData representing exising collections in the db
            <HomeCard images={images} />
          )}
          {/* There should be an additional Cubby that invites the user to login and upload  */}
          {Auth.loggedIn() ? <></> : <>{<BlankCubby />}</>}
        </div>
      </div>
    </main>
  );
};

export default Home;
