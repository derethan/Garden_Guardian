import { Box, Card, Typography } from "@mui/material";

import gardenPic from "../../assets/videoPlaceholder.png";

const DeviceOverview = ({ deviceID, deviceStatus }) => {
  return (
    <>
      <Typography variant="h6" color="text.primary" fontWeight='bold'>
        Device Overview
      </Typography>

      <Card
        variant="light"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1rem",
          marginTop: "1rem",
          borderRadius: '15px',
        }}
      >
        
        <img src={gardenPic} alt='Camera feed' style={{width: '100%'}} />

        <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop: '1rem' }}>
          <Typography variant="body" color="text.primary" fontWeight='bold'>
            Device:
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
          >
            {deviceID}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body" color="text.secondary">
            Temperature:
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
          >
            N/A
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtext" color="text.secondary">
            Status:
          </Typography>
          <Typography
            variant="body1"
            color={deviceStatus === "online" ? "green" : "red"}
          >
            {deviceStatus}
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default DeviceOverview;
