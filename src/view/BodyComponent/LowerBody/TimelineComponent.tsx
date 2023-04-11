import * as React from "react";
import { styled } from "@mui/material/styles";
import icon1 from "../../../images/icon-brand-recognition.svg";
import icon2 from "../../../images/icon-detailed-records.svg";
import icon3 from "../../../images/icon-fully-customizable.svg";

import {
  Stack,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: "flex",

  color: theme.palette.text.secondary,
}));
const TimelineComponent = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        marginLeft="0"
        sx={{ marginLeft: "0" }}
      >
        <Item>
          <Stack>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "primary.dark",
                borderRadius: "15rem",
                height: "2.5rem",
                width: "2.5rem",
                padding: "1rem",
                position: "relative",
                top: "-3rem",
                left: "2rem",
              }}
            >
              <img src={icon1} />
            </Paper>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "primary.dark", marginLeft: "0" }}
            >
              Brand Recongnition
            </Typography>
            <Typography variant="body1" component="div">
              Boost your brand recongnition with each clik . Generic links dont
              mean a thing . Branded links help instill confidence in your
              content .
            </Typography>
          </Stack>
        </Item>
        <Divider
          sx={{
            borderColor: "primary.main",
            width: isMatch ? "9rem" : "2rem",
            height: isMatch ? "3rem" : "3rem",
            textAlign: "center",
            borderBottomWidth: isMatch ? "0" : "0.5rem",
            borderRightWidth: isMatch ? "0.5rem" : "0",
          }}
        />

        <Item
          sx={{
            position: "relative",
            top: isMatch ? "0" : "2rem",
          }}
        >
          <Stack>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "primary.dark",
                borderRadius: "15rem",
                height: "2.5rem",
                width: "2.5rem",
                padding: "1rem",
                position: "relative",
                top: "-3rem",
                left: "2rem",
              }}
            >
              <img src={icon2} />
            </Paper>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "primary.dark" }}
            >
              Brand Recongnition
            </Typography>
            <Typography variant="body1" component="div">
              Boost your brand recongnition with each clik . Generic links dont
              mean a thing . Branded links help instill confidence in your
              content .
            </Typography>
          </Stack>
        </Item>
        <Divider
          sx={{
            borderColor: "primary.main",
            width: isMatch ? "9rem" : "2rem",
            height: isMatch ? "3rem" : "6rem",
            textAlign: "center",
            borderBottomWidth: isMatch ? "0" : "0.5rem",
            borderRightWidth: isMatch ? "0.5rem" : "0",
          }}
        />
        <Item
          sx={{
            position: "relative",
            top: isMatch ? 0 : "4rem",
          }}
        >
          <Stack>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "primary.dark",
                borderRadius: "15rem",
                height: "2.5rem",
                width: "2.5rem",
                padding: "1rem",
                position: "relative",
                top: "-3rem",
                left: "2rem",
              }}
            >
              <img src={icon3} />
            </Paper>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "primary.dark" }}
            >
              Brand Recongnition
            </Typography>
            <Typography variant="body1" component="div">
              Boost your brand recongnition with each clik . Generic links dont
              mean a thing . Branded links help instill confidence in your
              content .
            </Typography>
          </Stack>
        </Item>
      </Stack>
    </>
  );
};
export default TimelineComponent;
