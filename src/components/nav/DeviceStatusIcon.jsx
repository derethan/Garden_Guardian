import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";

//Sensor Icons
import SensorsOffIcon from "@mui/icons-material/SensorsOff";
import SensorsOnIcon from "@mui/icons-material/Sensors";

import { useGetDeviceInfo } from "../../hooks/useGetDeviceInfo";

const DeviceStatusIcon = (deviceID) => {
    const theme = useTheme();

    const [deviceStatus, setDeviceStatus] = useState("offline");
    const { isDeviceActive } = useGetDeviceInfo();

  // UseEffect to check the status of the device every 5 minutes
    useEffect(() => {
        //Function to fetch the device timestamp
        const checkStatus = async () => {

            //Check if the device is active
            const deviceActive = await isDeviceActive(deviceID);

            //If the device is active, set the status to online
            if (deviceActive) {
                setDeviceStatus("online");
                console.log("Device is online");
            } else {
                setDeviceStatus("offline");
                console.log("Device is offline");
            }
        };

        //Fetch the Device Status on Component
        checkStatus();

        //Set the interval to check the device every 5 minutes
        const interval = setInterval(() => {
            checkStatus();
        }, 1 * 60 * 1000);

        //Clear the interval on unmount
        return () => clearInterval(interval);
    } , []);// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
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
    </Box>
  );
};

export default DeviceStatusIcon;
