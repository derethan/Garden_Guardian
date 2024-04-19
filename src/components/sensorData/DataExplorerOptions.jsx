import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Typography,
  Slider,
  Tooltip,
} from "@mui/material";
import { useState } from "react";

const DataExplorerOptions = ({ optionData, setOptionData }) => {
  const [frequency, setFrequency] = useState(1);

  const graphParams = [
    { timeFrame: "1h", steps: 6, default: "5m", factor: 5 },
    { timeFrame: "1d", steps: 12, default: "1h", factor: 60 },
    { timeFrame: "7d", steps: 6, default: "4h", factor: 240 },
    { timeFrame: "30d", steps: 7, default: "1d", factor: 1440 },
  ];

  //Handles the change of the Frequency and Timeframe
  const handleChange = (event) => {
    if (event.target.name === "frequency") {
      setFrequency(event.target.value); // Sets the frequency value to the slider value

      // Scales the value of the slider to the correct value (minutes or hours, etc)
      let scaledValue = setScale(event.target.value);
      setOptionData({
        ...optionData,
        [event.target.name]: valueLabelFormat(scaledValue),
      });
    } else {
      setOptionData({
        ...optionData,
        [event.target.name]: event.target.value,
        frequency: graphParams.find(
          (setting) => setting.timeFrame === event.target.value
        ).default,
      });
      setFrequency(1);
    }
  };

  //Formats the Label for the Frequency Slider - Converts the value to M/H/D format
  function valueLabelFormat(value) {
    if (value < 60) {
      return value + "m";
    } else if (value < 1440) {
      return value / 60 + "h";
    } else {
      return value / 1440 + "d";
    }
  }

  //Sets the scale for the Frequency Slider- Converts the value to minutes format
  function setScale(value) {
    const factor = graphParams.find(
      (setting) => setting.timeFrame === optionData.timeframe
    ).factor;

    return value * factor;
  }

  // Sets how many steps the slider can have based on the timeframe
  function setAllowedSteps(timeFrame) {
    let allowedSteps = 0;
    graphParams.forEach((setting) => {
      if (setting.timeFrame === timeFrame) {
        allowedSteps = setting.steps;
      }
    });
    return allowedSteps;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        mt: 2,
        width: "100%",
      }}
    >
      <Tooltip
        title={`Display Sensor Data for the Past ${optionData.timeframe}`}
        placement="top"
      >
        <FormControl sx={{ width: "150px" }}>
          <InputLabel id="timeframe">Timeframe</InputLabel>
          <Select
            labelId="timeframe"
            id="timeframe"
            label="timeframe"
            name="timeframe"
            value={optionData.timeframe}
            onChange={handleChange}
          >
            <MenuItem disabled value="default">
              Select a Time Frame
            </MenuItem>
            <MenuItem value={"1h"}>Hourly</MenuItem>
            <MenuItem value={"1d"}>Daily</MenuItem>
            <MenuItem value={"7d"}>Weekly</MenuItem>
            <MenuItem value={"30d"}>Monthly</MenuItem>
          </Select>
        </FormControl>
      </Tooltip>

      <Tooltip
        title={`Display the Data every ${valueLabelFormat(
          setScale(frequency)
        )} for the past ${optionData.timeframe}`}
        placement="top"
      >
        <Box width={"200px"}>
          <Typography id="frequency" gutterBottom>
            Frequency
          </Typography>
          <Slider
            name="frequency"
            aria-label="Frequency"
            defaultValue={1}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            valueLabelDisplay="auto"
            min={1}
            max={setAllowedSteps(optionData.timeframe)}
            step={1}
            scale={setScale}
            value={frequency}
            onChange={handleChange}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default DataExplorerOptions;
