//Icons
// import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WaterIcon from "@mui/icons-material/WaterOutlined";
import DeviceIcon from "@mui/icons-material/HomeMaxOutlined";
import TemperatureIcon from "@mui/icons-material/Thermostat";
import HumidityIcon from "@mui/icons-material/Opacity";

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';

//Function to get the icon for the sensor
export const getIcon = (sensor) => {
  switch (sensor) {
    case "Water Temperature":
      return WaterIcon;
    case "Device Temperature":
      return DeviceIcon;
    case "Temperature Sensor":
      return TemperatureIcon;
    case "Humidity Sensor":
      return HumidityIcon;
    case "PH":
      return DriveFileRenameOutlineIcon;
    default:
      return null;
  }
};
