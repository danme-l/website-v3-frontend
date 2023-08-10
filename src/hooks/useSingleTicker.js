import { useState, useEffect } from 'react';

function useSingleTicker(ticker) {
    const [tickerData, setTickerData] = useState([]);

    useEffect(() => {
        async function fetchTickerData() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/markets/${ticker}`);
            const data = await response.json();
            setTickerData(data);
        }

        fetchTickerData();
    }, [ticker]);

    return tickerData;
}

export default useSingleTicker;