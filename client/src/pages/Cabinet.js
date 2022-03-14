import React from 'react';
import { useQuery } from '@apollo/client';

import Cubby from '../components/Cubby';
import BlankCubby from '../components/BlankCubby';

import { QUERY_IMAGES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_IMAGES);
  const images = data?.images || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            // This should map the array of the component, Cubby, with data from the imagesData linked to a specific collection in the db
            <Cubby
              images={images}
            />
          )}
            {/* There should be an additional Cubby that invites the user to login and upload  */}
           { <BlankCubby />}
        </div>
      </div>
    </main>
  );
};

export default Home;