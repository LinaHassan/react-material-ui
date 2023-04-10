import { Stack, Paper, Typography, Button } from "@mui/material";
import img from "../../../images/illustration-working.svg";
const Section = () => {
  return (
    <Stack
      spacing={4}
      sx={{ padding: "24px 24px " }}
      direction={{ xs: "column-reverse", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack
        spacing={3}
        direction="column"
        sx={{ width: "55vw" }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ fontSize: { xs: "h4.fontSize", sm: "h1.fontSize" } }}
        >
          More than just shorter links
        </Typography>
        <Typography variant="h5" component="div" color="info.light">
          build your brand's recongnition and get detaild <br />
          insights on how your links are performing.
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "10rem",
            color: "white",
            padding: "0.5rem 2rem ",
            marjonTop: "1rem",
          }}
        >
          Get Started
        </Button>
      </Stack>

      <Paper
        elevation={0}
        sx={{ width: "70vw", float: "right", textAlign: "right" }}
      >
        <img src={img} width="100%" height="100%" />
      </Paper>
    </Stack>
  );
};
export default Section;
