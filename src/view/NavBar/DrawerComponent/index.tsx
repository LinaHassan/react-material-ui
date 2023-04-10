import {
  Drawer,
  IconButton,
  List,
  ListItemText,
  Divider,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        anchor="top"
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            float: "right",
          },
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "primary.dark",
            flexGrow: 1,
            padding: "1rem",
            textAlign: "center" ,
            color: "white",
            margin: "5rem 2rem",
            borderRadius: "1rem",
            backdropFilter: "blur(5px)",
          }}
        >
          <ListItem button>
            <ListItemText primary="Features"  sx={{ textAlign: "center" }}/>
          </ListItem>
  
          <ListItem button>
            <ListItemText primary="Pricing" sx={{ textAlign: "center" }} />
          </ListItem>
          <ListItem button >
            <ListItemText primary="Resources" sx={{ textAlign: "center" }} />
          </ListItem>
          <Divider
          sx={{
            borderColor: "info.light",
            width: "25rem",
            textAlign: "center",
  

          }}
        />
          <ListItem button>
            <ListItemText primary="Login" sx={{ textAlign: "center" }} />
          </ListItem>
          <ListItem
            button
            sx={{
              borderRadius: "10rem",
              backgroundColor: "primary.main",
              padding: " 1rem 2rem ",
              display: "flex",
              justifyContent: "center",
              width: "auto",
              margin: "1rem 0",
            }}
          >
            <ListItemText primary="Sign Up " sx={{ textAlign: "center" , padding:"0 2rem "}} />
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: 0 }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
export default DrawerComp;
