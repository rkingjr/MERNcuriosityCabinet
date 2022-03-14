import React from 'react';
import { useQuery } from '@apollo/client';

import CabinetList from '../components/CabinetList';

import { QUERY_CABINETS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_CABINETS);
  const cabinets = data?.cabinets || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CabinetList
              cabinets={cabinets}
              title="Here's the current roster of cabinets..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
