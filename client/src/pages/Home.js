import React from "react";
import { useQuery } from "@apollo/client";

import HomeCard from "../components/HomeCard/HomeCard";
import BlankCubby from "../components/BlankCubby/BlankCubby";
import FileUpload from "../components/FileUpload/FileUpload";

import { QUERY_IMAGES } from "../utils/queries";

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
          {<FileUpload/>}
          {/* There should be an additional Cubby that invites the user to login and upload  */}
          {<BlankCubby />}
        </div>
      </div>
    </main>
  );
};

export default Home;
