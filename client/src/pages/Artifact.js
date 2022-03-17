import React from "react";
// import Cubby from "../components/Cubby/Cubby";
// import BlankCubby from "../components/BlankCubby/BlankCubby";
import ArtifactCard from "../components/ArtifactCard/ArtifactCard";

// import { QUERY_CABINETS } from "../utils/queries";

const Artifact = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          <ArtifactCard />
        </div>
      </div>
    </main>
  );
};

export default Artifact;
