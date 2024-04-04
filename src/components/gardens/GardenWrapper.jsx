/* eslint-disable react/prop-types */
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState } from "react";
import { useMediaQuery } from "@mui/material";

import { useGardenFunctions } from "./utils/useGardenFunctions";

import AddToGardenButton from "../buttons/AddToGardenButton";
import GardenGroup from "./GardenGroup";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ButtonCard from "../ButtonCard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ConfirmDelete from "../dialog/ConfirmDelete";

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
  setGardens,
  setGardenPlants,
  setGardenGroups,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { deleteGarden } = useGardenFunctions();

  const [anchorEl, setAnchorEl] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const [value, setValue] = useState(0);
  const [selectedGarden, setSelectedGarden] = useState(gardenData[value] || {});

  const handleChange = (event, value) => {
    setValue(value);
    setSelectedGarden(gardenData[value]);
  };

  const handleClose = () => {
    setShowConfirmDelete(false);
  };

  const handleDeleteGarden = () => {
    deleteGarden(
      selectedGarden.gardenID,
      setGardens,
      setGardenGroups,
      setGardenPlants
    );
    setValue(0);
    setSelectedGarden(gardenData[0]);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", pt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="primary"
          aria-label="GardenWrapper Tabs"
          centered={!isMobile}
          variant={isMobile ? "fullWidth" : "standard"}
          sx={{ borderBottom: 1, borderColor: "divider", pb: 2, ml: "auto" }}
        >
          {gardenData.map((garden, index) => (
            <Tab label={garden.gardenName} {...a11yProps(index)} key={index} />
          ))}
        </Tabs>

        {/* More Options Button */}
        <Tooltip title="Click here to modify your Garden" arrow>
          <IconButton
            onClick={(event) => setAnchorEl(event.currentTarget)}
            sx={{ ml: "auto" }}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        {/* Delete Garden Menu */}
        <Menu
          id="Garden-Options-Menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem disabled
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            fontSize: "1.1rem",
            borderBottom: 1,
            borderColor: "silver",
            
          }}
           >Garden Options</MenuItem>
          <MenuItem
            onClick={() => {
              handleAddGarden(true);
              setAnchorEl(null);
            }}
          >
            Add a new Garden
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleAddGroup(true);
              setAnchorEl(null);
            }}
          >
            Add a Plant Group
          </MenuItem>
   
          <MenuItem
            onClick={() => {
              setShowConfirmDelete(true);
              setAnchorEl(null);
            }}
          >
            Delete Garden
          </MenuItem>
        </Menu>
        {/* Confirm Delete Dialog */}
        <ConfirmDelete
          title="Garden"
          show={showConfirmDelete}
          handleClose={handleClose}
          handleConfirm={() => {
            handleDeleteGarden();
            handleClose();
          }}
        />
      </Box>

      {gardenData.map((garden, index) => (
        <TabPanel value={value} index={index} key={index}>
          {
            // Check if there are groups in the garden, if so display them
            gardenGroups &&
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
                        setGardenPlants={setGardenPlants}
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
                  border: "none",
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
