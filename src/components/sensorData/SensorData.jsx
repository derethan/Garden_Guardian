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
        change[sensor] =
          Math.round((current[sensor] - previous[sensor]) * 100) / 100;
      }
    }

    return change;
  };

  //Retrieves the Latest Sensor Data from the API
  useEffect(() => {
    //Retrieves the Latest Sensor Data from the API
    async function getSensorData() {
      const data = await getLatestReading(deviceID);

      if (localStorage.getItem("sensorData")) {
        //Retrieves the Previous Sensor Data from the Local Storage
        const storedData = JSON.parse(localStorage.getItem("sensorData"));
        const difference = calculateDifference(data, storedData);
        setDifference(difference);
      }

      //Stores the Current Sensor Data and the Difference in the current and previous reading
      localStorage.setItem("sensorData", JSON.stringify(data));
      setSensorData(data);
    }

    getSensorData();

    //Set the interval to check the device every 1 minutes
    const interval = setInterval(() => {
      getSensorData();
    }, 1 * 60 * 1000);

    //Clear the interval when the component is unmounted
    return () => clearInterval(interval);
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
      <Box sx={{ width: {xs: '100%', md: '70%'} }}>
        <SensorBanner sensorData={sensorData} difference={difference} />

        <SensorInfoBanner sensorData={sensorData} />
      </Box>

      <Divider orientation="vertical" flexItem sx={{
        display: { xs: "none", md: "block"}
      
      }} />

      <Box sx={{ width: "30%",
      display: { xs: "none", md: "block"}
     }}>
        <SummaryColumn />
      </Box>
    </Container>
  );
};

export default SensorData;
