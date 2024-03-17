/* eslint-disable react/prop-types */

import { Box, Typography } from "@mui/material";

import IncreaseIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import DecreaseIcon from "@mui/icons-material/ArrowCircleDownOutlined";

const SensorChange = ({ difference, sensor }) => {

    return (

        <Box
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {
          // If the  difference is not 0, display the difference.
          // If the difference is greater then 0 display increase, else display decrease
          difference[sensor] !== 0 ? (
            difference[sensor] > 0 ? (
              <>
                <IncreaseIcon />
                <Typography variant="caption" fontWeight="bold">
                  Increase By {difference[sensor]} {sensor.includes ('Humidity') ? '%' : '°C'}
                </Typography>
              </>
            ) : (
              <>
                <DecreaseIcon />
                <Typography variant="caption" fontWeight="bold">
                  Decrease By {Math.abs(difference[sensor])} {sensor.includes ('Humidity') ? '%' : '°C'}
                </Typography>
              </>
            )
          ) : null
        }
      </Box>

    );

}

export default SensorChange;