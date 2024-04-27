/*******************************************
 *  Description: This component is used to display
 *  The Information within the Sensor Card Buttons on the Sensor Dashboard Page
 ***********************************************/

import { Box, Typography } from "@mui/material";
import { sensorFormat } from "./util/sensorFormat";
import { iconColor } from "./util/iconColor";

const SensorCardInfo = ({ sensor, sensorData, Icon }) => {

  return (
    <>
      {Icon && <Icon sx={{ fontSize: 80, color: iconColor(sensor, sensorData) }} />}
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
