/* eslint-disable react/prop-types */
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import AddToGardenButton from "../buttons/AddToGardenButton";
import GardenGroup from "./GardenGroup";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import ButtonCard from "../ButtonCard";

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
  setGardenGroups,
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
          {
            // Check if there are groups in the garden, if so display them
            gardenGroups.filter((group) => group.gardenID === garden.gardenID)
              .length > 0 ? (
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
                        setGardenGroups={setGardenGroups}
                      />
                    </Grid>
                  ))}
              </Grid>
            ) : (
              // If there are no groups in the garden, display a Placeholder & message
              <ButtonCard
                sx={{
                  mt: 4,
                  mb: 4,
                  backgroundColor: "background.lightGrey",
                  boxShadow: "none",
                  border: 'none',
                }}
                title={"Your Gardens Looking A Little Lonley..."}
                onClick={handleAddGroup}
              >
                <Typography variant="h6" pt={8} pb={8}>
                  You Currently have no Groups in this Garden.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    pb: 4,
                  }}
                >
                  <Typography variant="body1">
                    Click here to add a Group
                  </Typography>
                  <AddCircleOutlineIcon />
                </Box>
              </ButtonCard>
            )
          }
        </TabPanel>
      ))}
    </Box>
  );
};

export default GardenWrapper;
