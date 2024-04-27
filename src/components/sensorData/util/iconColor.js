export const iconColor = (sensor, sensorData) => {
  switch (sensor) {
    case "PH":
      if (sensorData[sensor] <= 5 || sensorData[sensor] >= 7) {
        return "error.main";
      } else if (sensorData[sensor] < 5.8 || sensorData[sensor] > 6.3) {
        return "warning.main";
      } else {
        return "success.main";
      }
    default:
      return "primary.secondary";
  }
};
