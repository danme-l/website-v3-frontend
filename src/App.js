import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// mui imports
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MyThemeProvider } from "./components/theme/ThemeProvider";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Markets } from './components/pages/markets/Markets';
import { About } from './components/pages/about/About'
import MarketDetail from './components/pages/markets/MarketDetail';
import PageNotFound from './components/misc/PageNotFound';
import PageInProgress from './components/misc/PageInProgress';

function App() {
  return (
    <MyThemeProvider>
      <Box  sx={{  m: 10 }}>
        <CssBaseline />
        <BrowserRouter >
          <Header />
          <Routes>
            <Route name="home" path="/" element={<Home />} />
            <Route name="markets" path="/markets" element={<Markets />} />
            <Route name="marketDetail" path="/markets/:ticker" element={<MarketDetail />} />
            <Route name="blog" path='/blog' element={<PageInProgress pageName='Blog'/> } />
            <Route name="about" path='/about' element={<About /> } />
            <Route name="404" path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </MyThemeProvider>
  );
}

export default App;