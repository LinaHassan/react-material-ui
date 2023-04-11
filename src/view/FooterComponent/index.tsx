import { Button, Stack, Typography } from "@mui/material";
import desktopbackgroundImage from "../../images/bg-boost-desktop.svg";
import mobilebackgroundImage from "../../images/bg-boost-mobile.svg";
import ContectComponent from "./ContectComponent";

const FooterComponent = () => {
  return (
    <>
      <Stack>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="2.5rem"
          sx={{
            backgroundColor: "primary.dark",
            backgroundImage: `url(${desktopbackgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            "@media (max-width: 600px)": {
              backgroundImage: `url(${mobilebackgroundImage})`,
            },
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            width="50vw"
            sx={{ color: "white" }}
          >
            <Typography variant="h6">Boost your Links today</Typography>

            <Button
              variant="contained"
              sx={{ borderRadius: "10rem", color: "white" }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>

        <ContectComponent />
      </Stack>
    </>
  );
};
export default FooterComponent;
