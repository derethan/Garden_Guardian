import { Typography, Card } from "@mui/material";

const PinnedReadings = () => {
  return (
    <>
      <Typography
        variant="h6"
        color="text.primary"
        fontWeight="bold"
        sx={{ paddingTop: "1rem" }}
      >
        Sensor Readings
      </Typography>

      <Card
        variant="light"
        sx={{ padding: "1rem", borderRadius: "15px" }}
      ></Card>
    </>
  );
};

export default PinnedReadings;
