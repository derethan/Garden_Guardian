/*******************************************
 *  Description: This component is used to display
 *  the sensor information container on the Sensor Dashboard Page.
 * 
 * The Component Containes the Title and the Clickable Sensor Buttons
 ***********************************************/

import { useNavigate } from "react-router-dom";

import { Box, Grid, Typography } from "@mui/material";

//Import Components
import ButtonCard from "../ButtonCard";
import SensorCardInfo from "./SensorCardInfo";

//Import Logic
import { getIcon } from "./util/getIcon";

//SensorInfoBanner component
const SensorInfoBanner = ({ sensorData }) => {
  const navigate = useNavigate();

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
                <ButtonCard
                  title={sensor}
                  onClick={() => {
                    navigate(`/sensor/${sensor}`, {
                      state: { measurement: sensor, latestReading: sensorData[sensor] },
                    }); //navigate to the sensorData page
                  }}
                >
                  <SensorCardInfo
                    sensor={sensor}
                    sensorData={sensorData}
                    Icon={getIcon(sensor)}
                  />
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
