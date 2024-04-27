// Import MUI Components
import { Box, Card, Typography } from "@mui/material";

//Import Components
import DeviceSensorContainer from "./DeviceSensorContainer";
import NotFound from "../NotFoundCard";

const SensorOverview = ({ user, hasDevice, devices }) => {

  return (
    <>
      {hasDevice ? (
        <Card
          variant="light"
          sx={{
            m: 4,
            p: 2,
            borderRadius: 4,
            width: { xs: "100%", md: "80%" },
          }}
        >
          <Typography variant="h6" color={"text.main"} fontWeight={"bold"}>
            Sensor Overview
          </Typography>

          <Typography
            variant="caption"
            color={"text.subtitle"}
            fontWeight={"bold"}
          >
            Here is a quick snapshot of your devices
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
          >
            {devices.map((device) => (
              <DeviceSensorContainer key={device.deviceID} device={device} />
            ))}
          </Box>
        </Card>
      ) : (
        <NotFound
          title={"No Sensors Found"}
          subtitle={"No sensors have been added to your account yet."}
          location={"/sensor"}
        />
      )}
    </>
  );
};

export default SensorOverview;
