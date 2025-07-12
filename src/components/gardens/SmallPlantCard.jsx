import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Menu, MenuItem, Typography } from "@mui/material";
import ButtonCard from "../ButtonCard";
import ConfirmDelete from "../dialog/ConfirmDelete";
import defaultPlantImage from "../../assets/generic_potted_plant.png";

import { useGardenFunctions } from "./utils/useGardenFunctions";
import dayjs from "dayjs";

export const SmallPlantCard = ({ plant }) => {
  const { deleteGardenPlant } = useGardenFunctions();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleClick = () => {
    setAnchorEl(null);
    navigate(`plant/${plant.gardenPlantID}`);
  };

  const handleDeletePlant = () => {
    deleteGardenPlant(plant.gardenPlantID);
    setShowConfirmDelete(false);
  };

  useEffect(() => {
    // console.log(plant);
  }, [plant]);

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
        {/* Plant Image */}
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

        {/* Plant Info */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          {/* Plant Custom Name */}
          <Typography variant="body2" color={"text.main"} fontWeight={"bold"}>
            {plant.customName}
          </Typography>

          {/* Plant Label */}
          {plant.plantData.plantName && (
            <Typography
              variant="caption"
              sx={{
                fontSize: "10px",
                color: "text.subtitle",
                fontWeight: "bold",
              }}
            >
              {plant.plantData.varietyName
                ? `${plant.plantData.varietyName},  ${plant.plantData.plantName}`
                : plant.plantData.plantName}
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
