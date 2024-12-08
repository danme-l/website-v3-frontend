import { useState, useEffect } from 'react';

function useMarkets(tickers = [], widgetType) {
  const [loading, setLoading] = useState(true);
  const [marketsData, setMarketsData] = useState([]);

  useEffect(() => {
    async function fetchMarketsData() {
      setLoading(true);
  
      const tickerParams = new URLSearchParams();
      tickers.forEach((ticker) => tickerParams.append('tickers', ticker));
      // const apiUrl = `http://localhost:5000/markets?${tickerParams.toString()}`;
      const apiUrl = `${process.env.REACT_APP_API_URL}markets?${tickerParams.toString()}`;
  
      console.log(`Fetching data from: ${apiUrl}`);
  
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
        }
  
        const data = await response.json();
        setMarketsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchMarketsData();
  }, [JSON.stringify(tickers), widgetType]); // stringify tickers
  

  return { loading, data: marketsData };
}

export default useMarkets;

