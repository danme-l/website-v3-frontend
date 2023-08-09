import React from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import tickersInfo from './tickers.json';

const MarketDetail = () => {
  const { ticker } = useParams();

  return (
    <Box>
      <Typography variant='h4'>{tickersInfo[ticker]['name']}</Typography>
      <Typography variant='body1'>{tickersInfo[ticker]['description']}</Typography>
      {/* TODO render market details based on the ticker */}
      <Typography variant='body1'>Time series chart and other stuff coming here soon.</Typography>
    </Box>
  );
};

export default MarketDetail;