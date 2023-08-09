import React, {useState} from "react";
import { Typography, Box, Link, Paper, Collapse } from "@mui/material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { Percent, AttachMoney, Source, CurrencyBitcoin, Warehouse } from "@mui/icons-material";
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import { GiMetalBar, GiOilDrum } from 'react-icons/gi';
import { MarketsWidget } from "./MarketsWidget";
import Background from "../../background/Background";
import CircledShadedButton from "../../utils/CircledShadedButton";

export const Markets = () => {
  const [widgetMode, setWidgetMode] = useState('dollars');
  const [widgetType, setWidgetType] = useState(null);
  const [sourcesVisible, setSourcesVisible] = useState(false);

  const showSources = () => setSourcesVisible(!sourcesVisible);

  const actions = [
    { icon: <LiaMoneyBillWaveSolid />, name: 'Indices' },
    { icon: <GiMetalBar />, name: 'Metals' },
    { icon: <GiOilDrum />, name: 'Oil & Gas' },
    { icon: <Warehouse />, name: 'Commodities' },
    { icon: <CurrencyBitcoin />, name: 'Crypto' },
  ];

  const handleActionClick = (actionName) => {
    setWidgetType(actionName);
  };

  return (
    <Box sx={{ height: `100vh`}}>
      <Background inputConfigs={{
          scale:0.05, px:90, py:10, numParticles:70
      }}/>
      <Box display={'flex'} alignItems={'center'}>
        <Typography variant="h2" gutterBottom>
        Market Overview
        </Typography>
      </Box>
      <Box display={'flex'} flexDirection={'row'}>
          <Box>
            <MarketsWidget widgetMode={widgetMode} widgetType={widgetType} />
          </Box>
          <Box alignItems={'center'}>
            <CircledShadedButton icon={<Percent />} value='percent' clickFunction={() => setWidgetMode('percent')}/>
            <CircledShadedButton icon={<AttachMoney />} value='dollars' clickFunction={() => setWidgetMode('dollars')}/>
            <CircledShadedButton icon={<Source />} value='sources' clickFunction={() => showSources()}/> 
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              icon={<SpeedDialIcon />}
              direction="down"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={`View more ${action.name}`}
                  tooltipPlacement="right"
                  onClick={() => handleActionClick(action.name)}
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>
        
        {/* Sources Box */}
        <Collapse in={sourcesVisible} unmountOnExit>
          <Paper elevation={3} sx={{p:2}}>
            <Typography variant="h5">Sources</Typography>
            <Typography variant="body1">
              All financial data here is sourced from <Link href="https://ca.finance.yahoo.com/">Yahoo Finance</Link> and
              retrieved using the <Link href="https://pypi.org/project/yfinance/">yfinance</Link> python library.
            </Typography>
          </Paper>
        </Collapse>
    </Box> 
  );
};