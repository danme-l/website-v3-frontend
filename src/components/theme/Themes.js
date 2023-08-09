import { createMuiTheme, responsiveFontSizes } from '@mui/material';

export const lightBlue = '#00bfbf';
export const orange = "#ff895d";
export const black = '#000000';
export const white = '#ffffff'

export const LightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      mode: 'light',
      primary: {
        main: lightBlue,
      },
      secondary: {
        main: orange,
      },
      background: {
        default: white,
      },
      foreground: {
        default: black,
      },
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h2: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
      body1: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
      body2: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
        fontSize: 14
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: black,
            backgroundColor: white,
          },
        },
      },
      MuiIconButton: {
        root: {
          boxShadow:
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
          '&:hover': {
            backgroundColor: lightBlue,
          },
          transition: 'all 0.5s ease',
        },
      },
      MuiFab: {
        root: {
          width: '2.5rem',
          height: '2.5rem',
          fontSize: '1.25rem',
        },
        primary: {
          color: black,
          backgroundColor: 'transparent',
          '&:hover': {
            color: black,
            backgroundColor: lightBlue,
          },
          transition: 'all 0.5s ease !important',
        },
      },
      MuiTooltip: {
        tooltip: {
          fontFamily: 'Roboto Mono, monospace',
          backgroundColor: lightBlue,
          color: black,
          fontSize: 11,
        },
      },
    },
  })
);

export const DarkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: orange,
      },
      secondary: {
        main: lightBlue,
      },
      background: {
        default: black,
      },
      foreground: {
        default: white,
      },
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h2: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
      body1: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
      body2: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
        fontSize: 14
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: white,
            backgroundColor: black,
          },
        },
      },
      MuiIconButton: {
        root: {
          boxShadow:
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
          '&:hover': {
            backgroundColor: orange,
          },
          transition: 'all 0.5s ease',
        },
      },
      MuiFab: {
        root: {
          width: '2.5rem',
          height: '2.5rem',
          fontSize: '1.25rem',
        },
        primary: {
          color: white,
          backgroundColor: 'transparent',
          '&:hover': {
            color: white,
            backgroundColor: orange,
          },
          transition: 'all 0.5s ease !important',
        },
      },
      MuiTooltip: {
        tooltip: {
          fontFamily: 'Roboto Mono, monospace',
          backgroundColor: orange,
          color: white,
          fontSize: 11,
        },
      },
    },
  })
);
