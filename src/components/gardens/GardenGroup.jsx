/* eslint-disable react/prop-types */
import { Box, Typography, Card, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AddPlant } from "../modals/AddPlant";

import { useState } from "react";

const GardenGroup = ({ group, gardenPlants, handleAddPlant }) => {
  const [ShowAddPlantModal, setShowAddPlantModal] = useState(false);

  return (
    <Card variant="light" sx={{ height: "400px", p: 2, mt: 2 }}>
      <Typography
        variant="h6"
        fontWeight={"bold"}
        color={"primary"}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        {group.groupName}

        <IconButton
          sx={{ float: "right" }}
          onClick={() => {
            setShowAddPlantModal(true);
          }}
        >
          <AddIcon />
        </IconButton>
      </Typography>

      {/* Display component for each Plant */}
      {gardenPlants && (
        <Box>
          {gardenPlants
            .filter((plant) => plant.groupID === group.groupID)
            .map((plant, index) => (
              <Typography key={index}>{plant.label}</Typography>
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
