import React, { useEffect, useState } from 'react';
import Table from './components/Table';

const App = () => {
  const [offers, setOffers] = useState([]);

  useEffect(async () => {
    let res = await fetch(
      'http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad_Air',
    );
    res = await res.json();
    setOffers(res.widget.data.offers);
  }, []);

  return <Table offers={offers} />;
};

export default App;
