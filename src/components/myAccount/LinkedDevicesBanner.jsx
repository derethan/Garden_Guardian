/* eslint-disable react/prop-types */
import { Container, Box, Grid, Typography } from "@mui/material";
import DeviceCard from "../DeviceCard";

const LinkedDevicesBanner = ({ hasDevice, devices }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          padding: "1rem",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Linked Devices
        </Typography>

        {hasDevice ? (
          <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'center', alignItems: 'center' }}>
            {devices.map((device) => (
              <DeviceCard key={device.deviceID} device={device} />
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" sx={{ mt: 2 }}>
            No devices linked
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default LinkedDevicesBanner;
