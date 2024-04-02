/* eslint-disable react/prop-types */
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import AddToGardenButton from "../buttons/AddToGardenButton";
import GardenGroup from "./GardenGroup";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const GardenWrapper = ({
  gardenData,
  gardenGroups,
  gardenPlants,
  handleAddGarden,
  handleAddGroup,
  setGardenPlants,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", pt: 2 }}>
      <AddToGardenButton
        gardenGroups={gardenGroups}
        handleAddGarden={handleAddGarden}
        handleAddGroup={handleAddGroup}
      />
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="primary"
        aria-label="GardenWrapper Tabs"
        centered={!isMobile}
        variant={isMobile ? "fullWidth" : "standard"}
        sx={{ borderBottom: 1, borderColor: "divider", pb: 2 }}
      >
        {gardenData.map((garden, index) => (
          <Tab label={garden.gardenName} {...a11yProps(index)} key={index} />
        ))}
      </Tabs>

      {gardenData.map((garden, index) => (
        <TabPanel value={value} index={index} key={index}>
          {gardenGroups ? (
            <Grid
              container
              spacing={2}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {gardenGroups
                .filter((group) => group.gardenID === garden.gardenID)
                .map((group, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <GardenGroup
                      group={group}
                      gardenPlants={gardenPlants}
                      handleAddPlant={setGardenPlants}
                    />
                  </Grid>
                ))}
            </Grid>
          ) : (
            <Typography variant="h6" sx={{ mt: 2 }}>
              You have no groups in this garden
            </Typography>
          )}
        </TabPanel>
      ))}
    </Box>
  );
};

export default GardenWrapper;
