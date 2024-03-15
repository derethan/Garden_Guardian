/* eslint-disable react/prop-types */
import { Box, Typography, Divider } from "@mui/material";

//Material icons
import IncreaseIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import DecreaseIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import SmallArrowUp from "@mui/icons-material/ArrowDropUpOutlined";
import SmallArrowDown from "@mui/icons-material/ArrowDropDownOutlined";

//Component for the Sensor Banner (Shaded box at the top of the Sensor Data Page)
const SensorBanner = ({ sensorData, difference }) => {
  const temperature = sensorData["Temperature Sensor"];
  const humidity = sensorData["Humidity Sensor"];
  const waterTemp = sensorData["Water Temperature"];

  return (
    <Box
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
        <Typography variant="caption" fontWeight="bold">
          Current Conditions
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {
            // If the  difference is not 0, display the difference.
            // If the difference is greater then 0 display increase, else display decrease
            difference["Temperature Sensor"] !== 0 ? (
              difference["Temperature Sensor"] > 0 ? (
                <>
                  <IncreaseIcon />
                  <Typography variant="caption" fontWeight="bold">
                    Increase By {difference["Temperature Sensor"]}°C
                  </Typography>
                </>
              ) : (
                <>
                  <DecreaseIcon />
                  <Typography variant="caption" fontWeight="bold">
                    Decrease By {Math.abs(difference["Temperature Sensor"])}°C
                  </Typography>
                </>
              )
            ) : null
          }
        </Box>
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
          <Box sx={{ display: "flex", gap: 1 }}>
            {
              // If the  difference is not 0, display the difference.
              // If the difference is greater then 0 display increase, else display decrease
              difference["Humidity Sensor"] !== 0 ? (
                difference["Humidity Sensor"] > 0 ? (
                  <>
                    <SmallArrowUp />
                    <Typography variant="caption">
                      Increase By {difference["Humidity Sensor"]}%
                    </Typography>
                  </>
                ) : (
                  <>
                    <SmallArrowDown />
                    <Typography variant="caption">
                      Decrease By {Math.abs(difference["Humidity Sensor"])}%
                    </Typography>
                  </>
                )
              ) : null
            }
          </Box>

          <Typography variant="body1" fontWeight="bold">
            Humidity: {humidity}%
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ width: "5px" }} />

        <Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {
              // If the  difference is not 0, display the difference.
              // If the difference is greater then 0 display increase, else display decrease
              difference["Water Temperature"] !== 0 ? (
                difference["Water Temperature"] > 0 ? (
                  <>
                    <SmallArrowUp />
                    <Typography variant="caption">
                      Increase By {difference["Water Temperature"]}°C
                    </Typography>
                  </>
                ) : (
                  <>
                    <SmallArrowDown />
                    <Typography variant="caption">
                      Decrease By {Math.abs(difference["Water Temperature"])}°C
                    </Typography>
                  </>
                )
              ) : null
            }
          </Box>

          <Typography variant="body1" fontWeight="bold">
            Water Temp: {waterTemp}°C
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SensorBanner;
