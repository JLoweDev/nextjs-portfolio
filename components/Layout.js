import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


// Create a context to share the theme mode and toggle function
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function Layout({ children }) {
  const [mode, setMode] = useState('light'); // Initial mode

  // Memoize the toggle function to prevent unnecessary re-renders
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // Memoize the theme creation to optimize performance
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode, // This is the key: Material-UI uses this 'mode' to determine the palette
          primary: {
            main: '#D7816A',
          },
          secondary: {
            main: '#006D77',
          },
          // Define your background colors based on the mode
          background: {
            default: mode === 'light' ? '#DADDD8' : '#1C1C1C', // Light grey for light, dark grey for dark
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e', // White for light, slightly lighter dark for dark surfaces (Cards)
          },
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
      }),
    [mode], // Recreate theme only when 'mode' changes
  );


  return (
    <ColorModeContext value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Resets CSS for consistent styling */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Your Portfolio
              </Link>
            </Typography>
            {/* Dark mode toggle button */}
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {/* You can add navigation links here */}
          </Toolbar>
        </AppBar>
        <main>{children}</main>
        {/* Optional: Add a footer here */}
      </ThemeProvider>
    </ColorModeContext>
  );
}