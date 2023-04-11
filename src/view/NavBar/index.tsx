import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useMediaQuery, useTheme } from "@mui/material";
import DrawerComp from "./DrawerComponent";
import DesktopNav from "./DesktopNav";
import Logo from "../../images/logo.svg";
const NavBar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        color="inherit"
        sx={{ padding: "0" }}
      >
        <Toolbar sx={{ padding: "0" }}>
          <img src={Logo} />
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <DesktopNav />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
