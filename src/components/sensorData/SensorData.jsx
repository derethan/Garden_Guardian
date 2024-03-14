import { Container, Box, Divider } from "@mui/material";

import SummaryColumn from "./SummaryColumn";
import SensorBanner from "./SensorBanner";
import SensorInfoBanner from "./SensorInfoBanner";

const SensorData = () => {
  return (
    <Container className="sensorData"
      maxWidth="none"
      sx={{
        display: "flex",
        gap: "1rem",
        padding: "1.5rem",
      }}
    >
      <Box sx={{ width: "70%" }}>
        <SensorBanner />

        <SensorInfoBanner />



      </Box>

      <Divider orientation="vertical" flexItem />

      <Box sx={{ width: "30%" }}>
        <SummaryColumn />
      </Box>
    </Container>
  );
};

export default SensorData;
