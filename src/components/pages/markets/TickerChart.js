import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useTheme } from '@mui/material';
import { Typography } from '@mui/material';

const formatDate = (dateString) => {
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

const CustomTooltip = ({active, payload, label}) => {
    if (active && payload && payload.length) {
        return (
            <div>
                <p>{`Date: ${formatDate(label)}`}</p>
                <p>{`Price: $${payload[0].value.toFixed(2)}`}</p>
            </div>
        )
    }
};

const calculateYAxisTicks = (minValue, maxValue, tickCount) => {
    const tickInterval = (maxValue - minValue) / (tickCount - 1);
    const ticks = [];
  
    for (let i = 0; i < tickCount; i++) {
      ticks.push(minValue + tickInterval * i);
    }
  
    return ticks;
  };

const TickerChart = ({ data = [] }) => { // default to empty erray, preventing errors from undefined.map
    const theme = useTheme();

    // guard against empty data
    if (!data || data.length === 0) {
        return <Typography variant="body1">No chart data available.</Typography>;
    }

    const minClose = Math.min(...data.map(item => item.Close));
    const maxClose = Math.max(...data.map(item => item.Close));
    const lowerDomain = minClose * 0.97; // 3% lower
    const upperDomain = maxClose * 1.03; // 3% higher

    const yAxisTicks = calculateYAxisTicks(lowerDomain, upperDomain, 5);
    
    return (
        <LineChart width={800} height={400} data={data} margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" tickFormatter={formatDate} />
            <YAxis ticks={yAxisTicks} tickFormatter={(t) => "$" + t.toFixed(2)} domain={[lowerDomain, upperDomain]}/>
            <Tooltip content={<CustomTooltip />} />
            <Legend /> 
            <Line type="monotone" dataKey="Close" stroke={theme.palette.primary.main} dot={false}  activeDot={{ r: 8 }} />
        </LineChart>
    );
};

export default TickerChart;