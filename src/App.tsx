import "./App.css";
import Page from "./view/Page";

function App() {
  return (
    <div >
      
        <Page />
    
    </div>
  );
}

export default App;




// import "./App.css";
// import Page from "./view/Page";
// import { createTheme, ThemeProvider, PaletteOptions } from "@mui/material";
// interface CustomPaletteOptions extends PaletteOptions {
//   palette: {
//     primary: {
//       main: string;
//       dark: string;
//     };
//     secondary: {
//       main: string;
//     };
//     neutral: {
//       Gray: string;
//       GrayishViolet: string;
//       DarkBlue: string;
//       DarkViolet: string;
//     };
//   };
// }
// const customPalette: CustomPaletteOptions = {
//   palette: {
//     primary: {
//       main: "#2acfcf",
//       dark: "#2c1075",
//     },
//     secondary: {
//       main: "#f68383",
//     },
//     neutral: {
//       Gray: "#bfbfbf",
//       GrayishViolet: "9e9aa7",
//       DarkBlue: "#35323e",
//       DarkViolet: "#232127",
//     },
//   },
// };

// const theme = createTheme(customPalette);
// function App() {
//   return (
//     <div>
//       <ThemeProvider theme={theme}>
//         <Page />
//       </ThemeProvider>
//     </div>
//   );
// }

// export default App;
