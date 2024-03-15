import { Box, Grid, Typography } from "@mui/material";

//Import Components
import ButtonCard from "../ButtonCard";
import SensorCardInfo from "./SensorCardInfo";

//Icons
// import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WaterIcon from '@mui/icons-material/WaterOutlined';
import DeviceIcon from "@mui/icons-material/HomeMaxOutlined";
import TemperatureIcon from "@mui/icons-material/Thermostat";
import HumidityIcon from "@mui/icons-material/Opacity";

//SensorInfoBanner component
const SensorInfoBanner = ({ sensorData }) => {

  //Function to get the icon for the sensor
  const getIcon = (sensor) => {
    switch (sensor) {
      case "Water Temperature":
        return WaterIcon;
      case "Device Temperature":
        return DeviceIcon;
      case "Temperature Sensor":
        return TemperatureIcon;
      case "Humidity Sensor":
        return HumidityIcon;
      default:
        return null;
    }
  };

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
                <ButtonCard title={sensor}>
                  <SensorCardInfo sensor={sensor} sensorData={sensorData} Icon={getIcon (sensor)} />
                </ButtonCard>
              </Grid>
            );
          })
        }
      </Grid>
    </Box>
  );
};
export default SensorInfoBanner;
