/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  Card,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AddPlant } from "../modals/AddPlant";

import { useState } from "react";
import { SmallPlantCard } from "./SmallPlantCard";

import { useGardenFunctions } from "./utils/useGardenFunctions";
import ConfirmDelete from "../dialog/ConfirmDelete";

const GardenGroup = ({
  group,
  gardenPlants,
  handleAddPlant,
  setGardenGroups,
  setGardenPlants,
}) => {
  const [ShowAddPlantModal, setShowAddPlantModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const { deleteGardenGroup } = useGardenFunctions();

  const handleDeleteGroup = () => {
    deleteGardenGroup(group.groupID, setGardenGroups, setGardenPlants);
  };

  const handleClose = () => {
    setShowConfirmDelete(false);
  };

  return (
    <Card variant="light" sx={{ minHeight: "400px", p: 2, mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
          pb: 1,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={"bold"}
          color={"primary"}
          sx={{ pl: 4 }}
        >
          {group.groupName}
        </Typography>

        {/* Options Menu Icon */}
        <Tooltip title="Options" arrow>
          <IconButton
            sx={{ mr: 2 }}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>

        {/* Options Menu for the Options Icon */}
        <Menu
          id="GardenGroupOptionsMenu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
            onClick={() => {
              setShowAddPlantModal(true);
              setAnchorEl(null);
            }}
          >
            Add a Plant
          </MenuItem>
          <MenuItem
            onClick={() => {
              setShowConfirmDelete(true);
              setAnchorEl(null);
            }}
          >
            Delete Group
          </MenuItem>
        </Menu>

        {/* Confirm Delete Dialog */}
        <ConfirmDelete
          title={"Group"}
          show={showConfirmDelete}
          handleClose={handleClose}
          handleConfirm={handleDeleteGroup}
        />
      </Box>

      {/* Display component for each Plant */}
      {gardenPlants && (
        <Box pt={4}>
          {gardenPlants
            .filter((plant) => plant.groupID === group.groupID)
            .map((plant, index) => (
              <SmallPlantCard
                key={index}
                plant={plant}
                setGardenPlants={setGardenPlants}
              />
            ))}
        </Box>
      )}

      {/* Add Plant Modal */}
      {ShowAddPlantModal && (
        <AddPlant
          show={ShowAddPlantModal}
          handleClose={setShowAddPlantModal}
          groupData={group}
          setGardenPlants={handleAddPlant}
        />
      )}
    </Card>
  );
};

export default GardenGroup;
