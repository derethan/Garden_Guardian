export const sensorFormat = (sensor) => {
    if (sensor === "Humidity Sensor") {
      return "%";
    } else if (sensor === "PH") {
      return " pH";
    } else {
      return "°C";
    }
  };