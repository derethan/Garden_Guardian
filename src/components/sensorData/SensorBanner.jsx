/* eslint-disable react/prop-types */

import { sensorTypes } from "../../globalVar";
import { Box, Typography, Divider } from "@mui/material";

import SensorChange from "./SensorChange";

//Material icons

import SmallArrowUp from "@mui/icons-material/ArrowDropUpOutlined";
import SmallArrowDown from "@mui/icons-material/ArrowDropDownOutlined";

//Component for the Sensor Banner (Shaded box at the top of the Sensor Data Page)
const SensorBanner = ({ sensorData, difference }) => {
  const temperature = sensorData[sensorTypes.temperature];
  const humidity = sensorData[sensorTypes.humidity];
  const waterTemp = sensorData[sensorTypes.waterTemp];

  return (
    <Box name="sensorBanner"
      sx={{
        backgroundColor: "background.lightGrey",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SensorChange
          difference={difference}
          sensor={sensorTypes.temperature}
        />

        <Typography variant="caption" fontWeight="bold">
          Current Conditions
        </Typography>
      </Box>

      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h4" fontWeight="bold">
          Temperature: {temperature}°C
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
		
        <Box>
          <SensorChange difference={difference} sensor={sensorTypes.humidity} />

          <Typography variant="body1" fontWeight="bold">
            Humidity: {humidity}%
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ width: "5px" }} />

        <Box>
          <SensorChange
            difference={difference}
            sensor={sensorTypes.waterTemp}
          />

          <Typography variant="body1" fontWeight="bold">
            Water Temp: {waterTemp}°C
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SensorBanner;
