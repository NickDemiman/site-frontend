import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const linkStyle = {color: theme.palette.primary.light, display: 'block', textDecoration: "none" }

export {theme, linkStyle};