import { Box, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material";
import { useEffect } from "react";

//Sensor Icons
import SensorsOffIcon from "@mui/icons-material/SensorsOff";
import SensorsOnIcon from "@mui/icons-material/Sensors";

import { useGetDeviceInfo } from "../../hooks/useGetDeviceInfo";
import { useAuth } from "../../contextProviders";

const DeviceStatusIcon = (device) => {
  const theme = useTheme();
  const deviceID = device.deviceID;


  const { deviceStatus, setDeviceStatus } = useAuth();

  const { isDeviceActive } = useGetDeviceInfo();

  // UseEffect to check the status of the device 
  useEffect(() => {
    //Function to fetch the device timestamp
    const checkStatus = async () => {
      //Check if the device is active
      const deviceActive = await isDeviceActive(device);

      //If the device is active, set the status to online
      if (deviceActive) {
        setDeviceStatus("online");
      } else {
        setDeviceStatus("offline");
      }
    };

    if (deviceStatus !== "online") {
      //Fetch the Device Status on Component
      checkStatus();
    }

    //Set the interval to check the device every  minutes
    const interval = setInterval(() => {
      checkStatus();
    }, 1 * 30 * 1000);

    //Clear the interval on unmount
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Tooltip title={`${deviceID} is ${deviceStatus}`} arrow>
        <IconButton
          color="inherit"
          aria-label="account"
          edge="end"
          sx={{ marginRight: 5 }}
        >
          {deviceStatus === "online" ? (
            <SensorsOnIcon sx={{ color: theme.palette.success.main }} />
          ) : (
            <SensorsOffIcon sx={{ color: theme.palette.error.main }} />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default DeviceStatusIcon;
