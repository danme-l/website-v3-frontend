import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Menu, MenuItem, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import useSingleTicker from '../../../hooks/useSingleTicker';
import TickerChart from './TickerChart';
import tickersInfo from './tickers.json';
import Background from "../../background/Background";

function TickerMenu({type}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionClick = (ticker) => {
    setAnchorEl(null)
    navigate(`/markets/${ticker}`)
  };

  // filter the tickers based on the selected type
  const tickersOfType = Object.entries(tickersInfo)
    .filter(([ticker, data]) => data.type === type)
    .map(([ticker]) => ticker);

  return (
    <div>
      <Button
        variant='contained'
        onClick={handleMenuClick}
      >
        View More {type}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {tickersOfType.map((t) => (
          <MenuItem onClick={() => handleOptionClick(t)}>
            <Typography variant='body2'>{t} | {tickersInfo[t]['name']}</Typography>
          </MenuItem>
        ))}
      </Menu>
          <div>
            <Button variant='contained' sx={{my:2}} onClick={() => navigate('/markets/')}>Back</Button>
          </div>
    </div>
  );
}

const MarketDetail = () => {
  const { ticker } = useParams();
  const { loading, data : tickerData, error } = useSingleTicker(ticker);
  console.log(tickerData)

  // use the ticker as the key to trigger the chart to re-render on ticker change
  const tickerKey = `ticker-${ticker}`;

  return (
    <Box>
      <Background inputConfigs={{
          scale:0.08, px:73, py:50, numParticles: 100
      }}/>
      <Typography variant='h3'>{tickersInfo[ticker]['name']}</Typography>
      <Typography variant='body1'>{tickersInfo[ticker]['description']}</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <Box>
          <Typography variant="h5">{tickersInfo[ticker]?.name} for the last year</Typography>
              {loading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <CircularProgress sx={{ m: 2 }} />
                </Box>
              ) : error ? (
                <Typography variant="body1" color="error">
                  {error}
                </Typography>
              ) : tickerData && tickerData.length > 0 ? (
                <TickerChart key={tickerKey} data={tickerData} />
              ) : (
                <Typography variant="body1">No data available.</Typography>
              )}
        </Box>
        <Box display={'flex'} flexDirection={'row'}>
          <TickerMenu type={tickersInfo[ticker]['type']} /> 
        </Box>
      </Box>
    </Box>
  );
};

export default MarketDetail;