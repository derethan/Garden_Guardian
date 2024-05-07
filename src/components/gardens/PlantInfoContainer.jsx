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

import { CircularProgress } from "@mui/material";

export const PlantInfoContainer = ({
  selectedPlant,
  plantDescription,
  setPlantDescription,
}) => {
  const URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlantDescription = async (plantName) => {
      setLoading(true);

      try {
        const response = await fetch(URL + `ai/${plantName}`);
        const result = await response.json();
        setPlantDescription(result);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
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
            <Typography variant="h5" pb={0} color={"text.main"}>
              {selectedPlant.name ||
                selectedPlant.common_name ||
                selectedPlant.scientific_name}
            </Typography>

            {selectedPlant.common_name && !selectedPlant.scientific_name && (
              <Typography
                variant="caption"
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

            {!loading ? (
              <Box sx={{ display: "flex", gap: 1, justifyContent:'center' }}>
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
  );
};
