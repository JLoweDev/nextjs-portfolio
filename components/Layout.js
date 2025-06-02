import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

// You can customize your theme here
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Blue
    },
    secondary: {
      main: '#ff4081', // Pink
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets CSS for consistent styling */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Your Portfolio
            </Link>
          </Typography>
          {/* You can add navigation links here */}
        </Toolbar>
      </AppBar>
      <main>{children}</main>
      {/* Optional: Add a footer here */}
    </ThemeProvider>
  );
}