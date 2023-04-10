import { Box, Grid, Typography, styled, Stack } from "@mui/material";
import twitter from "../../../images/icon-twitter.svg";
import facebook from "../../../images/icon-facebook.svg";
import instagram from "../../../images/icon-instagram.svg";
import pinterest from "../../../images/icon-pinterest.svg";

const ContectComponent = () => {
  return (
    <Box sx={{ backgroundColor: "info.dark" }} padding="3rem">
      <Grid container sx={{ textAlign: "center" }}>
        <Grid xs={10.5} md={6} lg={4}>
          <Typography color="white" variant="h4" padding="1rem">
            Shortly
          </Typography>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4} paddingTop="4rem">
          <Grid spacing={2} xs={12} lg={3}>
            <Box
              color="white"
              sx={{ fontSize: "16px", textTransform: "uppercase" }}
            >
              Features
            </Box>
            <Box
              component="ul"
              sx={{
                listStyleType: "none",
                color: "info.light",
                padding: "10px 0 ",
              }}
            >
              <Stack direction="column" spacing={1}>
                <li>Link shortening</li>
                <li>Brand Links</li>
                <li>Anyaltics</li>
              </Stack>
            </Box>
          </Grid>
          <Grid xs={12} lg={3}>
            <Box
              color="white"
              sx={{ fontSize: "16px", textTransform: "uppercase" }}
            >
              Resources
            </Box>
            <Box
              component="ul"
              sx={{
                listStyleType: "none",
                color: "info.light",
                padding: "10px 0 ",
              }}
            >
              <Stack direction="column" spacing={1}>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </Stack>
            </Box>
          </Grid>
          <Grid xs={12} lg={3}>
            <Box
              color="white"
              sx={{ fontSize: "16px", textTransform: "uppercase" }}
            >
              Company
            </Box>
            <Box
              component="ul"
              sx={{
                listStyleType: "none",
                color: "info.light",
                padding: "10px 0 ",
              }}
            >
              <Stack direction="column" spacing={1}>
                <li>About</li>
                <li>out Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </Stack>
            </Box>
          </Grid>

          {/* <Grid xs={6} md={6} lg={2} sx={{ textAlign: 'center' }} >

              <Stack direction="row" sx={{ textAlign: 'center' }}  spacing={2} >

              <img src={facebook}  />
              <img src={twitter} />
              <img src={pinterest} />
              <img src={instagram} />
              </Stack>
            
            </Grid> */}
          <Grid xs={12} lg={3}>
            <Box
              sx={{
                listStyleType: "none",
                color: "info.light",
                padding: "10px 0 ",
              }}
            >
              <Stack direction="row" spacing={1}>
                <img src={facebook} />
                <img src={twitter} />
                <img src={pinterest} />
                <img src={instagram} />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ContectComponent;
