import React from 'react';
import { useQuery } from '@apollo/client';
import Header from '../components/Header/Header';
import HomeCard from '../components/HomeCard/HomeCard';
import Footer from '../components/Footer/Footer';
import BlankCubby from '../components/BlankCubby';

import { QUERY_COLLECTIONS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_COLLECTIONS);
  const collections = data?.collections || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            // This should map the array of the component, HomeCard, with data from the collectionsData representing exising collections in the db
            <HomeCard
              collections={collections}
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
