/* eslint-disable no-prototype-builtins */
import { Container, Box, Divider } from "@mui/material";
import { useEffect, useState } from "react";

// Import Hooks
import { useGetSensorReading } from "../../hooks/getSensorReading";
import { useAuth } from "../../hooks/useAuthProvider";

// Import Components
import SummaryColumn from "./SummaryColumn";
import SensorBanner from "./SensorBanner";
import SensorInfoBanner from "./SensorInfoBanner";

//Component for the Content Area of the Sensor Data Page
const SensorData = () => {
  const { deviceID } = useAuth(); //
  const { getLatestReading } = useGetSensorReading();

  //Stores the Current Sensor Data and the Previous Reading
  const [sensorData, setSensorData] = useState({});
  const [difference, setDifference] = useState({});


  //Calculated the difference in the Supplied Value
  const calculateDifference = (current, previous) => {
    const change = {};
    for (const sensor in current) {
      if (previous.hasOwnProperty(sensor)) {
        change[sensor] = current[sensor] - previous[sensor];
      }
    }

    return change;
  };

  //Retrieves the Latest Sensor Data from the API
  useEffect(() => {
    async function getSensorData() {
      const data = await getLatestReading(deviceID);

      const storedData = JSON.parse(localStorage.getItem("sensorData"));
      const difference = calculateDifference(data, storedData);

      localStorage.setItem("sensorData", JSON.stringify(data));
      setSensorData(data);
      setDifference(difference);
    }

    getSensorData();
    
    //Set the interval to check the device every 1 minutes
    setInterval(() => {
      getSensorData();
    }, 1 * 60 * 1000);

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //Renders the Sensor Data Page
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        gap: "1rem",
        padding: "1.5rem",
      }}
    >
      <Box sx={{ width: "70%" }}>
        <SensorBanner sensorData={sensorData} difference={difference} />

        <SensorInfoBanner sensorData={sensorData} />
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box sx={{ width: "30%" }}>
        <SummaryColumn />
      </Box>
    </Container>
  );
};

export default SensorData;
