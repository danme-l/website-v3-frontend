import { useState, useEffect } from 'react';

function useSingleTicker(ticker) {
  const [loading, setLoading] = useState(true);
  const [tickerData, setTickerData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function fetchTickerData() {
      setLoading(true);
      setError(null);

      try {
        // fetch the data for the specific ticker
        const response = await fetch(`${process.env.REACT_APP_API_URL}/markets/${ticker}`);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
        }
        const data = await response.json();
        setTickerData(data);
      } catch (err) {
        console.error('Error fetching ticker data:', err);
        setError(err.message);
      } finally {
        setLoading(false); // set loading to false at the end
      }
    }

    fetchTickerData();
  }, [JSON.stringify(ticker)]); // stringify the ticker dependency

  return { loading, data: tickerData, error };
}

export default useSingleTicker;
