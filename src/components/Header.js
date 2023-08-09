import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  Zoom
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from '@mui/icons-material/Home';
import { ThemeToggle } from "./theme/ThemeToggle";

export const Header = () => {
    return (
    <Box >
      <AppBar>
        <Toolbar sx={{display: 'flex', justifyContent:'space-between'}}>
          <Typography variant="h6">
            Dan Meleras
          </Typography>
          <nav sx={{flexWrap: "wrap"}}>
            <Tooltip
                title={"Toggle Theme"}
                placement="bottom"
                TransitionComponent={Zoom}
                >
                <ThemeToggle />
            </Tooltip>
            <Tooltip
              title={"danme-l | GitHub"}
              placement="bottom"
              TransitionComponent={Zoom}
            >
              <IconButton
                aria-label={"danme-l | GitHub"}
                href="https://github.com/danme-l"
                target="_blank"
                rel="noreferrer"
                >
                <GitHubIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip
              title={"Home"}
              placement="bottom"
              TransitionComponent={Zoom}
            >
              <IconButton
                aria-label={"Home"}
                href="/"
                >
                <HomeIcon/>
              </IconButton>
            </Tooltip>
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
    );
  };