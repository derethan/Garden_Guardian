import { Box, Card, Grid, Typography } from "@mui/material";

import { useEffect, useState } from "react";

import { useGetDeviceInfo } from "../../hooks/useGetDeviceInfo";

const DeviceSensorContainer = ({ device }) => {
  const { getSensorInfo } = useGetDeviceInfo();

  const [deviceSensors, setDeviceSensors] = useState([]);

  useEffect(() => {
    async function getSensorData() {
      const sensorData = await getSensorInfo(device);
      setDeviceSensors(sensorData);
    }

    getSensorData();
  }, [device]);

  return (
    <Card
      key={device.deviceID}
      variant="light"
      sx={{
        p: 2,
        mt: 2,
        borderRadius: 4,
      }}
    >
      {/* Display the device name */}
      <Box>
        <Typography variant="h6" color={"text.main"} fontWeight={"bold"}>
          {device.deviceName}
        </Typography>

        <Typography
          variant="caption"
          color={"text.subtitle"}
          fontWeight={"bold"}
        >
          {device.deviceID}
        </Typography>
      </Box>

      {/* Display the sensor data */}
      {deviceSensors.length > 0 ? (
        <Grid container pt={4}>
          {deviceSensors.map((sensor, key) => (
            <Grid item xs={6} sm={4} md={12} lg={6} p={1} key={key}>
              <Box
                sx={{
                  backgroundColor: "background.shaded",
                  padding: "0.5em", // padding inside the box
                }}
              >
                <Typography
                  variant="body1"
                  color={"text.cardTitle"}
                  fontWeight={"bold"}
                >
                  {sensor.sensor}
                </Typography>
                <Typography
                  variant="caption"
                  color={
                    sensor.sensorStatus === "Online"
                      ? "success.main"
                      : "error.main"
                  }
                  fontWeight={"bold"}
                >
                  {sensor.sensorStatus}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" color={"text.textDark"} pt={2}>
          No sensors found
        </Typography>
      )}
    </Card>
  );
};

export default DeviceSensorContainer;
