import React from "react";
import { useQuery } from "@apollo/client";

import ArtifactCard from "../components/ArtifactCard/ArtifactCard";
import Cubby from "../components/Cubby/Cubby";
// import BlankCubby from "../components/BlankCubby";

import { QUERY_IMAGE } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_IMAGE);
  const image = data.image || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            // This should map the array of the component, Cubby, with data from the imagesData linked to a specific collection in the db
            <ArtifactCard image={image} />
          )}
          {/* There should be an additional Cubby that invites the user to login and upload  */}
          {<Cubby />}
        </div>
      </div>
    </main>
  );
};

export default Home;
