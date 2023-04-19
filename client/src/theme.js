import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({

  palette: {
    whatsApp:{
      green : "#00A884",
      vsCodeDark: "#1E1E1E",
      vsCodeBorder: "#414141",
    },
    primary: {
      // main: "#44c8ec"
      // main: '#748cf8',
      // main: '#075E54',
      main: '#383838',
      text: "#fff",
      background: "#383838"

    },
    secondary: {
      // main: '#19857b',
      // main: '#748cf8',
      // main: "#44c8ec"
      // main: "#128C7E"
      // main: "#025C4C"
      main: "#1E1E1E",
      background: "#272727"

    },
    tertiary : {
      main: "#0c6178"
    },
    quatery:{
      main: "#25D366"
    },
    pantagon:{
      main:"#ECE5DD"
    },
    lightBlue:{
      main: "#34B7F1"
    },
    background:{
      // main:"#b3c2ce"
      main:"#F5F5F5"
    },
    angoori:{
      main: "#DCF8C6"
    },
    error: {
      main: red.A400,
    },
  },
 
});

export default theme;