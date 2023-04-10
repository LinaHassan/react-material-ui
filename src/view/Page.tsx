import NavBar from "./NavBar";
import { createTheme, ThemeProvider, PaletteOptions } from "@mui/material";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(180, 66%, 49%)",
      dark: "hsl(257, 27%, 26%)",
    },
    secondary: {
      main: "hsl(0, 87%, 67%)",
    },

    info: {
      main: "hsl(257, 7%, 63%)",
      dark: "hsl(255, 11%, 22%)",
      light: "hsl(0, 0%, 75%)",
    },
  },
});
const Page = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <BodyComponent />
        <FooterComponent />
      </ThemeProvider>
    </>
  );
};

export default Page;
