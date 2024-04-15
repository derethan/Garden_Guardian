import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Menu, MenuItem, Typography } from "@mui/material";
import ButtonCard from "../ButtonCard";
import ConfirmDelete from "../dialog/ConfirmDelete";

import { useGardenFunctions } from "./utils/useGardenFunctions";

export const SmallPlantCard = ({ plant, setGardenPlants }) => {
  const { deleteGardenPlant } = useGardenFunctions();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleClick = () => {
    setAnchorEl(null);
    navigate(`plant/${plant.plantID}`);
  };

  const handleDeletePlant = () => {
    deleteGardenPlant(plant.plantID, setGardenPlants);
    setShowConfirmDelete(false);
  };

  return (
    <ButtonCard
      sx={{
        mb: 4,
      }}
      //   title={plant.label}
      onClick={!anchorEl && !showConfirmDelete ? (event) => setAnchorEl(event.currentTarget) : null}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          pl: 2,
          pr: 2,
        }}
      >
        {plant.image_url && (
          <Box
            component="img"
            src={plant.image_url}
            alt={plant.label}
            width={"75px"}
            height={"75px"}
            sx={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        )}
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", fontSize: "14px" }}
        >
          {plant.label}
        </Typography>
      </Box>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "center", horizontal: "right" }}
        transformOrigin={{ vertical: "center", horizontal: "center" }}
      >
        <MenuItem onClick={handleClick}>View Plant Info</MenuItem>
        <MenuItem onClick={() => {
          setAnchorEl(null);
          setShowConfirmDelete(true);
        }}>Delete Plant</MenuItem>
      </Menu>

      <ConfirmDelete
        title="Plant"
        show={showConfirmDelete}
        handleClose={() => setShowConfirmDelete(false)}
        handleConfirm={handleDeletePlant}
      />
      
    </ButtonCard>
  );
};
