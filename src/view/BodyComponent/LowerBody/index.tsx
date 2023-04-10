import { Stack, Link, Typography, Button, Stepper } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TimelineComponent from "./TimelineComponent";
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
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ backgroundColor: "info.light", padding: "5rem " }}
      >
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
