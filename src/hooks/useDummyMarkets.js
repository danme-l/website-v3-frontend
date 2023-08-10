import { useState, useEffect } from 'react';

function useDailyMarkets() {
    const [dailyMarkets, setDailyMarkets] = useState([]);

    useEffect(() => {
        async function fetchDailyMarkets() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/dummy_markets`);
            const data = await response.json();
            setDailyMarkets(data);
        }

        fetchDailyMarkets();
    }, []);

    return dailyMarkets;
}

export default useDailyMarkets;