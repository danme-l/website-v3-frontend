import React from "react";
import { Typography, Button, Box, Link } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Background from "./background/Background";
import { useTheme } from "@mui/material";

export const Home = () => {
  const theme = useTheme();

  const HomeButton = ({buttonContent, linkTo}) => {
    return (
      <Link href={linkTo}>
        <Button sx={{
          mx:3, 
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
            cursor: "default"
          }
        }} variant="outlined" color="primary">
          {buttonContent} 
          <ArrowForwardIcon />
        </Button>
      </Link>
      )
  }

  return (
    <Box sx={{ height: `100vh`, overflowY: 'auto' }}>
      <Background inputConfigs={{
                scale:0.4, px:50, py:18, numParticles:700
      }}/>
      <Typography variant="h2" color="textPrimary" gutterBottom>
        Data Scientist & Web Developer.
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        Interested in Data, Programming, Markets.
      </Typography>
      <br />
      <HomeButton buttonContent='Market Viewer' linkTo={'/markets'} />
      <HomeButton buttonContent='Blog' linkTo={'/blog'} />
      <HomeButton buttonContent='About' linkTo={'/about'} />
    </Box> 
  );
};