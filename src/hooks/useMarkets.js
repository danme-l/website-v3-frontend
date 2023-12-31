import { useState, useEffect } from 'react';

function useMarkets(tickers = [], widgetType) {
  const [loading, setLoading] = useState(true);
  const [marketsData, setMarketsData] = useState([]);

  useEffect(() => {
    async function fetchMarketsData() {
      setLoading(true);

      const tickerParams = new URLSearchParams();
      tickers.forEach((ticker) => tickerParams.append('tickers', ticker));

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/markets?${tickerParams.toString()}`);
        const data = await response.json();
        setMarketsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // stop loading regardless of success or error
      }
    }

    fetchMarketsData();
  }, [widgetType]);

  return { loading, data: marketsData };
}

export default useMarkets;
