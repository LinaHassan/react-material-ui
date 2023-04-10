import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Stack,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
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
            width: "5rem",
            height: "3rem",
            textAlign: "center",
            borderBottomWidth: isMatch ? "0" : "0.5rem",
            borderRightWidth: isMatch ? "0.5rem" : "0",
          }}
        />

        <Item>
          <Stack>
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
            width: "5rem",
            height: "3rem",
            textAlign: "center",
            borderBottomWidth: isMatch ? "0" : "0.5rem",
            borderRightWidth: isMatch ? "0.5rem" : "0",
          }}
        />
        <Item>
          <Stack>
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
