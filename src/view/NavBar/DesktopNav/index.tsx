
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button, Tab, Tabs,} from "@mui/material";


const DesktopNav =()=>{
    return <>
    

              <Tabs sx={{ flexGrow: 1 }}>
                <Tab label="Features" />
                <Tab label="Pricing" />
                <Tab label="Resources" />
              </Tabs>

              <Button variant="text"  sx={{color:"info.light"}}>
                Login
              </Button>
              <Button
                variant="contained"
                sx={{ borderRadius: "10rem", color: "white" }}
              >
                Sign Up
              </Button>
    </>
}



export default DesktopNav