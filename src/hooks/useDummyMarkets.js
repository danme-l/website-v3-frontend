import { useState, useEffect } from 'react';

function useDailyMarkets() {
    const [dailyMarkets, setDailyMarkets] = useState([]);

    useEffect(() => {
        async function fetchDailyMarkets() {
            const response = await fetch('http://127.0.0.1:5000/dummy_markets');
            const data = await response.json();
            setDailyMarkets(data);
        }

        fetchDailyMarkets();
    }, []);

    return dailyMarkets;
}

export default useDailyMarkets;