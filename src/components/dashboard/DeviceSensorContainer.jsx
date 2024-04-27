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
      <Box>
        {deviceSensors.length > 0 ? (
          <Grid container spacing={2} pt={4}>
            {deviceSensors.map((sensor) => (
              <Grid item xs={6} sm={4} md={6} p={1} key={sensor.sensorID}>
                <Typography variant="body1" color={"text.cardTitle"} fontWeight={'bold'}>
                  {sensor.sensor}
                </Typography>
                <Typography variant="caption" color={sensor.sensorStatus === 'Online' ? 'success.main': 'error.main'} fontWeight={'bold'}>
                  {sensor.sensorStatus}
                </Typography>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" color={"text.subtitle"}>
            No sensors found
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default DeviceSensorContainer;
