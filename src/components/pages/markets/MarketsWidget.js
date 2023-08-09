import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material';
// import useDummyMarkets from "../../../hooks/useDummyMarkets";
import useMarkets from '../../../hooks/useMarkets';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { PiChartLineUpLight } from 'react-icons/pi';
import tickersInfo from './tickers.json';
import CircledShadedButton from '../../utils/CircledShadedButton';
import { useNavigate } from 'react-router-dom';

export const MarketsWidget = ({ widgetMode, widgetType }) => {
  const navigate = useNavigate();  
  const theme = useTheme(); 

  // filter the tickers based on the selected type
  const tickersOfType = widgetType ? Object.entries(tickersInfo)
    .filter(([ticker, data]) => data.type === widgetType)
    .map(([ticker]) => ticker) : []; 

  // pass the filtered tickers to the useMarkets hook 
  // const dailyMarkets = useDummyMarkets();
  const { loading, data: dailyMarkets } = useMarkets(tickersOfType, widgetType);

  function calculatePercentChanges(dataArray) {
    return dataArray.map((item) => ({ 
      ticker: item.ticker,
      current_price: item.current_price,
      daily_change: (item.daily_change / item.current_price) * 100,
      weekly_change: (item.weekly_change / item.current_price) * 100,
      monthly_change: (item.monthly_change / item.current_price) * 100,
      three_month_change: (item.three_month_change / item.current_price) * 100,
      twelve_month_change: (item.twelve_month_change / item.current_price) * 100,
    }));
  }

  const StyledNumber = ({ value }) => ( 
    // negative numbers red, positive green
    <span style={{
        color: value < 0 ? "red" : "green", 
        fontFamily: theme.typography.body1.fontFamily  
        }}>
      {value ? value.toFixed(2) : value}
    </span>
  );

  const Row = ({ curTicker, data, mode }) => {
  /* row component with local state for each row
      functionality to open each row in the table
      and display info, option buttons */
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow 
          sx={{ '& > *': { borderBottom: 'unset' } }}
        >
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            <Typography variant='body1'>{tickersInfo[curTicker]["name"]}</Typography>
          </TableCell>
          <TableCell align="right">
            <Typography variant='body1'><StyledNumber value={data.current_price} />{" "}</Typography>
          </TableCell>
          {mode === "percent" ? (
              <>
                <TableCell align="right">
                  <Typography variant='body1'><StyledNumber value={data.daily_change} /> %</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant='body1'><StyledNumber value={data.weekly_change} /> %</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant='body1'><StyledNumber value={data.monthly_change} /> %</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant='body1'><StyledNumber value={data.three_month_change} /> %</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant='body1'><StyledNumber value={data.twelve_month_change} /> %</Typography>
                </TableCell>
              </>
            ) : (
              <>
                <TableCell align="right">
                  <Typography variant='body1'><StyledNumber value={data.daily_change} /></Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant='body1'><StyledNumber value={data.weekly_change} /></Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant='body1'><StyledNumber value={data.monthly_change} /></Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant='body1'><StyledNumber value={data.three_month_change} /></Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant='body1'><StyledNumber value={data.twelve_month_change} /></Typography>
                </TableCell>
              </>
            )}
        </TableRow>
        <TableRow>
          <TableCell
            style={{ paddingBottom: 0, paddingTop: 0 }}
            colSpan={8}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }} display={"flex"} flexDirection={"row"} alignItems={'center'}>
                <Typography variant="body2" gutterBottom component="div" sx={{mx:4}}>
                  {tickersInfo[curTicker]["description"]} 
                </Typography>
                <Box>
                  <CircledShadedButton icon={<PiChartLineUpLight />} value={'View Chart'} margin={1} clickFunction={() => navigate(`/markets/${curTicker}`)}/>
                  <CircledShadedButton icon={<ReadMoreIcon />} value={`View on Yahoo Finance`} link={tickersInfo[curTicker]['link']} margin={1}/>
                </Box>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  };

  return ( 
    <TableContainer component={Paper} elevation={3} sx={{ minWidth: 800 }}>
      {loading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <CircularProgress sx={{ m: 2 }} />
        </Box>
      )
        :
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell><Typography variant='body1'>Asset</Typography></TableCell>
            <TableCell align="right"><Typography variant='body1'>Price</Typography></TableCell>
            <TableCell align="right"><Typography variant='body1'>Daily Change</Typography></TableCell>
            <TableCell align="right"><Typography variant='body1'>Weekly Change</Typography></TableCell>
            <TableCell align="right"><Typography variant='body1'>Monthly Change</Typography></TableCell>
            <TableCell align="right"><Typography variant='body1'>Three Month Change</Typography></TableCell>
            <TableCell align="right"><Typography variant='body1'>Twelve Month Change</Typography></TableCell>
          </TableRow>
        </TableHead>

         <TableBody>
          {widgetMode === "dollars" ? (
            dailyMarkets.map((data) => (
              <Row key={data.ticker} curTicker={data.ticker} data={data} mode={widgetMode} />
              ))
              ) : (
                calculatePercentChanges(dailyMarkets).map((data) => (
                  <Row key={data.ticker} curTicker={data.ticker} data={data} mode={widgetMode} />
                  ))
                  )}
        </TableBody>
      </Table>
      }
    </TableContainer>
  );
};