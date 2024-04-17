/*******************************************
 *  Description: This component is used to display
 *  The Information within the Sensor Card Buttons on the Sensor Dashboard Page
 ***********************************************/

import { Box, Typography } from "@mui/material";

const SensorCardInfo = ({ sensor, sensorData, Icon }) => {
  const sensorFormat = (sensor) => {
    if (sensor === "Humidity Sensor") {
      return "%";
    } else if (sensor === "PH") {
      return " pH";
    } else {
      return "°C";
    }
  };

  const iconColor = (sensor) => {
    switch (sensor) {
      case "PH":
        if (sensorData[sensor] <= 5 || sensorData[sensor] >= 7) {
          return "error.main";
        } else if (sensorData[sensor] < 5.8 || sensorData[sensor] > 6.2) {
          return "warning.main";
        } else {
          return "success.main";
        }
      default:
        return "primary.secondary";
    }
  };

  return (
    <>
      {Icon && <Icon sx={{ fontSize: 80, color: iconColor(sensor) }} />}
      <Box>
        <Typography
          variant="caption"
          fontWeight={"bold"}
          color={"text.subtitle"}
        >
          Latest Reading
        </Typography>

        <Typography variant="body1" color={"text.cardTitle"} fontWeight={600}>
          {sensorData[sensor]}
          {sensorFormat(sensor)}
        </Typography>
      </Box>
    </>
  );
};

export default SensorCardInfo;
