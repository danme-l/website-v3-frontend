import { useState, useEffect } from 'react';

function useSingleTicker(ticker) {
    // const [loading, setLoading] = useState(true);
    const [tickerData, setTickerData] = useState([]);

    useEffect(() => {
        async function fetchTickerData() {
            const response = await fetch(`http://127.0.0.1:5000/markets/${ticker}`);
            const data = await response.json();
            setTickerData(data);

        //     try {
        //         const response = await fetch(`http://127.0.0.1:5000/markets/${ticker}`);
        //         const data = await response.json();
        //         setTickerData(data);
        //       } catch (error) {
        //         console.error('Error fetching data:', error);
        //       } finally {
        //         setLoading(false); // stop loading regardless of success or error
        //       }
        }

        fetchTickerData();
    }, [ticker]);

    // return {loading, tickerData};
    return tickerData;
}

export default useSingleTicker;