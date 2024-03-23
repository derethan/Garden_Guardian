/* eslint-disable react/prop-types */
import { Card, Grid, Typography } from "@mui/material";
import { PrimaryButton } from "./PrimaryButton";

import { useGetDeviceInfo } from "../hooks/useGetDeviceInfo";
import { useEffect, useState } from "react";

const DeviceCard = ({ device }) => {
  const { isDeviceActive } = useGetDeviceInfo();
  const [deviceStatus, setDeviceStatus] = useState(false);

  useEffect(() => {
    // Check if the device is active
    const getDeviceStatus = async () => {
      const status = await isDeviceActive(device);
        setDeviceStatus(status);
    };
    getDeviceStatus();
  }, [device, isDeviceActive]);



  return (
    <Grid
      item
      xs={10}
      sm={6}
      md={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        variant="light"
        sx={{
          p: 2,
          borderRadius: 4,
          width: "100%",
        }}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          {device.deviceID}
        </Typography>
        <Typography variant="body2" color={"grey"}>
          Status:{" "}
          <Typography
            component={"span"}
            sx={{
              color: deviceStatus ? "green" : "red",
            }}
          >
            {deviceStatus ? "Online" : "Offline"}
          </Typography>
        </Typography>
        <PrimaryButton text={"Remove"} />
      </Card>
    </Grid>
  );
};

export default DeviceCard;
