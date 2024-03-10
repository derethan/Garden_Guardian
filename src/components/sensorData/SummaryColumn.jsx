//Mui imports
import { Card, Box, Typography } from "@mui/material";

import DeviceOverview from "./DeviceOverview";
import Alerts from "./Alerts";

import { useAuth } from "../../hooks/useAuthProvider";
import PinnedReadings from "./PinnedReadings";

const SummaryColumn = () => {
  const { deviceID, deviceStatus } = useAuth();

  return (
    <Card
    variant="light"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem",
        height: "100%",
      }}
    >
        <DeviceOverview deviceID={deviceID} deviceStatus={deviceStatus} />
        <PinnedReadings />
        <Alerts />
    </Card>
  );
};

export default SummaryColumn;
