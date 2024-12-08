import { useState, useEffect } from 'react';

function useDailyMarkets() {
    const [dailyMarkets, setDailyMarkets] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchDailyMarkets() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/dummy_markets`);
            const data = await response.json();
            setDailyMarkets(data);
        }

        fetchDailyMarkets();
    }, []);

    return { loading, dailyMarkets };
}

export default useDailyMarkets;