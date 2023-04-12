import {
  Stack,
  Link,
  Typography,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TimelineComponent from "./TimelineComponent";
import background from "../../../images/bg-shorten-desktop.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: "flex",
  width: "70vw ",
  spacing: "2rem",
  color: theme.palette.text.secondary,
}));
const SecondSection = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ backgroundColor: "info.light", padding: "5rem " }}
      >
        <Paper
          sx={{
            padding: "2rem ",
            backgroundColor: "primary.dark",
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "65vw",
            position: "relative",
            top: isMatch ? "0" : "-9rem",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <TextField
              variant="outlined"
              placeholder="Shorten a link here ..."
              size="small"
              sx={{
                borderRadius: "0.5rem",
                backgroundColor: "white",
                width: "70%",
              }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: "0.5rem",
                color: "white",
                padding: "1rem 0.75rem ",
              }}
            >
              Shorten it!
            </Button>
          </Stack>
        </Paper>

        <Item>
          <Stack
            alignItems="flex-start"
            spacing={2}
            padding="0.5rem"
            width="100%"
            direction={{ xs: "column", sm: "row" }}
          >
            <Typography sx={{ flexGrow: 1 }}>
              https://www.frontendmentor.io
            </Typography>

            <Link
              href="  https://www.frontendmentor.io/"
              color="primary"
              underline="none"
            >
              https://www.frontendmentor.io
            </Link>
            <Button
              variant="contained"
              sx={{
                borderRadius: "0.5rem",
                color: "white",
                padding: "0.25rem 2rem ",
                marjonTop: "1rem",
                maxWidth: "70vw",
              }}
            >
              copy
            </Button>
          </Stack>
        </Item>

        <Item>
          <Stack
            alignItems="flex-start"
            spacing={2}
            padding="0.5rem"
            width="100%"
            direction={{ xs: "column", sm: "row" }}
          >
            <Typography sx={{ flexGrow: 1 }}>
              https://www.frontendmentor.io
            </Typography>

            <Link
              href="https://www.frontendmentor.io/"
              color="primary"
              underline="none"
            >
              https://www.frontendmentor.io
            </Link>
            <Button
              variant="contained"
              sx={{
                borderRadius: "0.5rem",
                color: "white",
                padding: "0.25rem 1.5rem ",
                marjonTop: "1rem",
                backgroundColor: "primary.dark",
              }}
            >
              copied!
            </Button>
          </Stack>
        </Item>

        <Item>
          <Stack
            alignItems="flex-start"
            spacing={2}
            padding="0.5rem"
            width="100%"
            direction={{ xs: "column", sm: "row" }}
          >
            <Typography sx={{ flexGrow: 1 }}>
              https://www.frontendmentor.io
            </Typography>

            <Link
              href="  https://www.frontendmentor.io/"
              color="primary"
              underline="none"
            >
              https://www.frontendmentor.io
            </Link>
            <Button
              variant="contained"
              sx={{
                borderRadius: "0.5rem",
                color: "white",
                padding: "0.25rem 2rem ",
                marjonTop: "1rem",
              }}
            >
              copy
            </Button>
          </Stack>
        </Item>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          width="32vw"
        >
          <Typography variant="h4">Advanced Statistics</Typography>
          <Typography sx={{ textAlign: "center", color: "info.main" }}>
            Track how your links are performing actoss the web with our advanced
            statistics dashboard
          </Typography>
        </Stack>
        <TimelineComponent />
      </Stack>
    </>
  );
};
export default SecondSection;
