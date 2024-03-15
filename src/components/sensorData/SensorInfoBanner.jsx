import { Box, Button, Grid, Typography } from "@mui/material";

//Icons
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DeviceIcon from "@mui/icons-material/HomeMaxOutlined";
import TemperatureIcon from "@mui/icons-material/Thermostat";
import HumidityIcon from "@mui/icons-material/Opacity";

//SensorInfoBanner component
const SensorInfoBanner = ({ sensorData }) => {

  return (
    <Box sx={{ paddingTop: "3rem" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Sensor Information
      </Typography>

      <Grid container spacing={2} sx={{ paddingTop: "1.5rem" }}>
        {
          //loop through the sensorData object and display a grid item for each item
          Object.keys(sensorData).map((sensor, index) => {
            return (
              <Grid item xs={6} key={index}>
                <Button
                  variant="card"
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: "14px" }}
                  >
                    {sensor}
                  </Typography>

                  {(sensor === "Water Temperature" && (
                    <WaterDropIcon sx={{ fontSize: 80 }} />
                  )) ||
                    (sensor === "Device Temperature" && (
                      <DeviceIcon sx={{ fontSize: 80 }} />
                    )) ||
                    (sensor === "Temperature Sensor" && (
                      <TemperatureIcon sx={{ fontSize: 80 }} />
                    )) ||
                    (sensor === "Humidity Sensor" && (
                      <HumidityIcon sx={{ fontSize: 80 }} />
                    ))}

                  <Box>
                    <Typography variant="caption" fontWeight="bold">
                      Latest Reading
                    </Typography>

                    <Typography variant="body1">
                      {sensorData[sensor]} {sensor === "Humidity Sensor" ? "%" : "°C"}
                    </Typography>
                  </Box>
                </Button>
              </Grid>
            );
          })
        }
      </Grid>
    </Box>
  );
};
export default SensorInfoBanner;
