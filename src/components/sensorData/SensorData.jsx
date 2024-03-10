import { Container, Box, Divider } from "@mui/material";

import SummaryColumn from "./SummaryColumn";

const SensorData = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <Box sx={{ width: "60%" }}>
        <h1>Sensor Data</h1>
      </Box>
      <Divider orientation="vertical" flexItem />

      <Box sx={{ width: "40%" }}>
        <SummaryColumn />
      </Box>
    </Container>
  );
};

export default SensorData;
