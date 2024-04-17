/*******************************************************************************
// Description: The PlantInfoContainer component displays the selected plant's
// information. The component receives the selectedPlant and plantData as props.
// The selectedPlant is the plant that the user has selected from the add Plant Modal.
// The Container is conditionally rendered when a user selects a plant from the List.

// Used IN:  AddPlant.jsx
*******************************************************************************/

import { Box, Typography } from "@mui/material";
import placeholderPlant from "../../assets/generic_potted_plant.png";
import { useState, useEffect } from "react";

export const PlantInfoContainer = ({ selectedPlant }) => {
  const URL = import.meta.env.VITE_API_URL;
  const [plantDescription, setPlantDescription] = useState(null);

  useEffect(() => {
    setPlantDescription(null);
    const fetchPlantDescription = async (plantName) => {
      try {
        const response = await fetch(URL + `ai/${plantName}`);
        const result = await response.json();
        setPlantDescription(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (selectedPlant) {
      fetchPlantDescription(selectedPlant.name || selectedPlant.common_name);
    }
  }, [selectedPlant]);

  return (
    <Box pt={4}>
      {selectedPlant ? (
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
            src={selectedPlant.image_url || placeholderPlant}
            alt={selectedPlant.name}
            width={"150px"}
            height={"150px"}
            ml={"auto"}
            mr={"auto"}
          />

          <Box sx={{ width: { xs: "100%", md: "75%" } }}>
            <Typography variant="h5" pb={2}>
              {selectedPlant.name ||
                selectedPlant.common_name ||
                selectedPlant.scientific_name}
            </Typography>

            {selectedPlant.common_name && !selectedPlant.scientific_name && (
              <Typography
                variant="subtitle2"
                pb={1}
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <span style={{ fontWeight: "bold" }}>
                  {selectedPlant.common_name}
                </span>
              </Typography>
            )}

            {selectedPlant.family && (
              <Typography
                variant="subtitle2"
                pb={1}
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <span style={{ fontWeight: "bold" }}>Family:</span>{" "}
                {selectedPlant.family}
              </Typography>
            )}

            {selectedPlant.genus && (
              <Typography
                variant="subtitle2"
                pb={1}
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <span style={{ fontWeight: "bold" }}>Genus:</span>{" "}
                {selectedPlant.genus}
              </Typography>
            )}

            {plantDescription && (
              <Typography variant="body1" pb={2} maxWidth={400}>
                {plantDescription}
              </Typography>
            )}
          </Box>
        </Box>
      ) : (
        <Box>
          <h1>No Plant Selected</h1>
        </Box>
      )}
    </Box>
  );
};
