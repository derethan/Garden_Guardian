import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Menu, MenuItem, Typography } from "@mui/material";
import ButtonCard from "../ButtonCard";
import ConfirmDelete from "../dialog/ConfirmDelete";
import defaultPlantImage from "../../assets/generic_potted_plant.png";

import { useGardenFunctions } from "./utils/useGardenFunctions";
import dayjs from "dayjs";

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
      onClick={
        !anchorEl && !showConfirmDelete
          ? (event) => setAnchorEl(event.currentTarget)
          : null
      }
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          pl: 2,
          pr: 2,
        }}
      >
        <Box
          component="img"
          src={plant.image_url || defaultPlantImage}
          alt={plant.label}
          width={"75px"}
          height={"75px"}
          sx={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography
            variant="body2"
            color={"text.main"}
            fontWeight={"bold"}
          >
            {plant.label}
          </Typography>
          {plant.variety && (
            <Typography
              variant="caption"
              sx={{
                fontSize: "10px",
                color: "text.subtitle",
                fontWeight: "bold",
              }}
            >
              {plant.variety || "No variety"}
            </Typography>
          )}
          {plant.startDate && (
            <Typography
              variant="caption"
              color={"text.subtitle"}
              fontWeight={"bold"}
            >
              {dayjs(plant.startDate).format("ddd MMMM DD, YYYY")}
            </Typography>
          )}
          {plant.growthStage && (
          <Typography
            variant="caption"
            color={"text.subtitle"}
            fontWeight={"bold"}
          >
            {plant.growthStage}
          </Typography>
          )}
        </Box>
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
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            setShowConfirmDelete(true);
          }}
        >
          Delete Plant
        </MenuItem>
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
