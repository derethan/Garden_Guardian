import { useState, useEffect } from "react";
import { Box, Typography, useTheme, Card } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import DataExplorerOptions from "./DataExplorerOptions";

import useMediaQuery from "@mui/material/useMediaQuery";

const SensorDataExplorer = ({ deviceID, sensor, measurement }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isLoading, setIsLoading] = useState(false);

  const [optionData, setOptionData] = useState({
    timeframe: "1h",
    frequency: "5m",
  });

  const [graphData, setGraphData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async (duration, frequency) => {
      const url = import.meta.env.VITE_API_URL;
      const endpoint = `sensors/readSensor?device_id=${deviceID}&measurement=${measurement}&duration=${duration}&frequency=${frequency}`;

      const response = await fetch(url + endpoint);
      const data = await response.json();

      setGraphData(data);
    };

    if (deviceID) {
      fetchData(optionData.timeframe, optionData.frequency);
    }
  }, [optionData, deviceID, measurement]);

  // Build the data for the x and y axis
  const buildAxisData = (axis, data) => {
    let yAxisData = [];
    let xAxisData = [];

    if (axis === "xAxis") {
      data.forEach((data) => {
        let date = new Date(data.time);

        xAxisData.push(date);
      });
      return xAxisData;
    } else {
      data.forEach((data) => {
        yAxisData.push(data.value);
      });

      return yAxisData;
    }
  };

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: theme.palette.background.lightGrey,
    //     mt: 4,
    //     pb: 4,
    //   }}
    // >

    <Card
    variant="light"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
        pt: 2,
        pb: 4,
        mb: 4,
      }}
    >
      <Typography variant="h6" color="text.cardTitle" fontWeight={600} pt={2}>
        Data Explorer
      </Typography>

      <DataExplorerOptions
        optionData={optionData}
        setOptionData={setOptionData}
      />

      {graphData.length > 0 && graphData != [] ? (
        <Box sx={{ width: {xs: '100vw', md: '75%'} }}>
          <LineChart
            xAxis={[
              {
                scaleType: "time",

                data: buildAxisData("xAxis", graphData),
                label: "Time",
              },
            ]}
            series={[
              {
                data: buildAxisData("yAxis", graphData),
                label: measurement,
              },
            ]}
            height={isMobile ? 300 : 400}
            colors={[theme.palette.primary.main]}
            sx={{ pt: 4 }}
          />
        </Box>
      ) : (
        <Typography variant="body1" color="text.primary" mt={4}>
          No data available for the selected time frame.
        </Typography>
      )}
    </Card>
    // </Box>
  );
};

export default SensorDataExplorer;
