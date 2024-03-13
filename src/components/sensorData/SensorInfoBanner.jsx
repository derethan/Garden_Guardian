import { Box, Card, Grid, Typography } from "@mui/material";

import { useEffect, useState } from "react";

import { useGetSensorReading } from "../../hooks/getSensorReading";

const SensorInfoBanner = () => {
  const [sensorData, setSensorData] = useState({});

  useEffect(() => {
    async function getSensorData() {}

    getSensorData();
  }, []);

  return (
    <Box sx={{ paddingTop: "3rem" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Sensor Information
      </Typography>

      <Grid container spacing={2} sx={{ paddingTop: "1.5rem" }}>
        <Grid item xs={6}>
          <Card variant="light">
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Sensor ID
            </Typography>
            <Typography variant="body1">123456</Typography>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card variant="light">
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Sensor Type
            </Typography>
            <Typography variant="body1">Temperature</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SensorInfoBanner;
