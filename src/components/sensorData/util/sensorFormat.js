import { useState } from "react";

export const sensorFormat = (sensor) => {

  // TODO: Use to get the Format from user prefferences at a later date
  const [tempFormat, setTempFormat] = useState("°C");
  
    if (sensor === "Humidity Sensor") {
      return "%";
    } else if (sensor === "PH") {
      return " pH";
    } else if (sensor === "TDS"){
      return " ppm";
    }
    else {
      return  ' ' + tempFormat;
    }
  };