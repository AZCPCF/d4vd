import { createTheme, ThemeProvider } from "@mui/material";
export const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      light:"#75c95d",
      main: '#612fec',
      dark:"#2e6823",
      contrastText: "#fff",
      // title: "rgba(0, 0, 0, 0.26)",
    },
    shadow: {
      main: "rgb(194, 194, 194)",
    },
  },
  typography: {
    fontFamily: "_",
    fontSize: 16,
  },
});

export const MuiThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};