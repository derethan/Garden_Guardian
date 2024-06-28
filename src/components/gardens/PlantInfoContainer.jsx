/*******************************************************************************
// Description: The PlantInfoContainer component displays the selected plant's
// information. The component receives the selectedPlant and plantData as props.
// The selectedPlant is the plant that the user has selected from the add Plant Modal.
// The Container is conditionally rendered when a user selects a plant from the List.

// Used IN:  AddPlant.jsx
*******************************************************************************/
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";

import placeholderPlant from "../../assets/generic_potted_plant.png";

import { useGardenFunctions } from "./utils/useGardenFunctions";

export const PlantInfoContainer = ({
  selectedPlant,
  selectedVariety,
  plantInfo,
  plantDescription,
  setPlantDescription,
  varieties,
}) => {
  const [loading, setLoading] = useState(false);
  const { getPlantDescription } = useGardenFunctions();

  // Queries the API for the selected plant's description - Generated from AI
  useEffect(() => {
    if (plantInfo) {
      if (plantInfo.description) {
        setPlantDescription(plantInfo.description);
      } else {
        setLoading(true);

        getPlantDescription(plantInfo.name || plantInfo.common_name)
          .then((response) => {
            setPlantDescription(response);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  }, [plantInfo]);

  return (
    <>
      {plantInfo && (
        <Box pt={4}>
          {(selectedPlant && (!varieties || varieties.length === 0)) ||
          (varieties && varieties.length > 0 && selectedVariety) ? (
            <Box
              name="PlantInfoContainer"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                gap: "1rem",
                backgroundColor: "background.lightGrey",
                padding: "1rem",
                borderRadius: 5,
              }}
            >
              <Box
                component="img"
                src={plantInfo.image_url || placeholderPlant}
                alt={plantInfo.name}
                width={"150px"}
                height={"150px"}
                ml={"auto"}
                mr={"auto"}
              />

              <Box sx={{ width: { xs: "100%", md: "75%" } }}>
                <Typography variant="h5" pb={0} color={"text.main"}>
                  {plantInfo.name ||
                    plantInfo.common_name ||
                    plantInfo.scientific_name}
                </Typography>

                {plantInfo.common_name && !plantInfo.scientific_name && (
                  <Typography
                    variant="caption"
                    pb={1}
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      {plantInfo.common_name}
                    </span>
                  </Typography>
                )}

                {plantInfo.family && (
                  <Typography
                    variant="subtitle2"
                    pb={1}
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span style={{ fontWeight: "bold" }}>Family:</span>{" "}
                    {plantInfo.family}
                  </Typography>
                )}

                {plantInfo.genus && (
                  <Typography
                    variant="subtitle2"
                    pb={1}
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span style={{ fontWeight: "bold" }}>Genus:</span>{" "}
                    {plantInfo.genus}
                  </Typography>
                )}

                {!loading ? (
                  <Box
                    sx={{ display: "flex", gap: 1, justifyContent: "center" }}
                  >
                    <Typography
                      variant="body1"
                      p={2}
                      maxWidth={400}
                      textAlign={"left"}
                    >
                      {plantDescription}
                    </Typography>
                  </Box>
                ) : (
                  <Box pt={4}>
                    <CircularProgress />
                  </Box>
                )}
              </Box>
            </Box>
          ) : (
            <Box>
              <h1>No Plant Selected</h1>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};
