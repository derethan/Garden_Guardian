import { useEffect, useState } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { average, highestPoint, lowestPoint } from "./util/calculations";

const SensorOverviewContainer = ({ deviceID, measurement, latestReading }) => {
  const theme = useTheme();

  //State for Graph Data and averages
  const [graphData, setGraphData] = useState([]);
  const [Data, setData] = useState([]);

  //Get the latest Sensor Data from the Past 24 Hours for the Summary
  useEffect(() => {
    const fetchData = async (duration, frequency) => {
      const url = import.meta.env.VITE_API_URL;
      const endpoint = `sensors/readSensor?device_id=${deviceID}&measurement=${measurement}&duration=${duration}&frequency=${frequency}`;

      const response = await fetch(url + endpoint);
      const data = await response.json();
      setData(data);

      //Extract the values from the data object - For Graph Summary Display
      let values = [];
      data.forEach((element) => {
        values.push(element.value);
      });
      setGraphData(values);
    };

    if (deviceID) {
      fetchData("24h", "15m");
    }
  }, [deviceID, measurement]); // eslint-disable-line

  return (
    <Box
      mt={4}
      sx={{
        backgroundColor: theme.palette.background.lightGrey,
      }}
    >
      {/* Chart Information*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" color="text.cardTitle" fontWeight={600} pt={2}>
          Todays Rundown
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.subtitle"
          fontWeight={"bold"}
        >
          (Past 24 Hours)
        </Typography>

        {/* Chart Display*/}
        {graphData.length > 0 && (
          <Box p={4} width={'100%'}>
            <SparkLineChart
              plotType="line"
              data={graphData}
              height={50}
              showTooltip
              colors={[theme.palette.primary.main,]}
            />
          </Box>
        )}
      </Box>

      {/* Averages Section*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.background.lightGrey,
          pb: 4,
        }}
      >
        <Typography variant="h6" color="text.cardTitle" fontWeight={600} pt={2}>
          Some quick stats
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6} mt={2}>
            <Typography
              variant="subtitle"
              color="text.subtitle"
              fontWeight={"bold"}
            >
              Current
            </Typography>
            <Typography variant="h6" color="text.main">
              {latestReading ? latestReading : 0}{" "}
              {measurement.includes("Humidity") ? "%" : `\u00B0C`}
            </Typography>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Typography
              variant="subtitle"
              color="text.subtitle"
              fontWeight={"bold"}
            >
              Daily Average
            </Typography>
            <Typography variant="h6" color="text.main">
              {average(graphData)}{" "}
              {measurement.includes("Humidity") ? "%" : `\u00B0C`}

            </Typography>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Typography
              variant="subtitle"
              color="text.subtitle"
              fontWeight={"bold"}
            >
              Lowest Point
            </Typography>
            <Typography variant="h6" color="text.main">
              {lowestPoint(Data) ? lowestPoint(Data).value : 0}{' '}
              {measurement.includes("Humidity") ? "%" : `\u00B0C`}
            </Typography>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Typography
              variant="subtitle"
              color="text.subtitle"
              fontWeight={"bold"}
            >
              Highest Point
            </Typography>
            <Typography variant="h6" color="text.main">
              {highestPoint(Data) ? highestPoint(Data).value : 0}{` `}
              {measurement.includes("Humidity") ? "%" : `\u00B0C`}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SensorOverviewContainer;
