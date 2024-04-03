//*******************************************************************************
// Description: The PlantInfoContainer component displays the selected plant's
// information. The component receives the selectedPlant and plantData as props.
// The selectedPlant is the plant that the user has selected from the add Plant Modal.
// The Container is conditionally rendered when a user selects a plant from the List.

// Used IN:  AddPlant.jsx

import { Box, Typography } from "@mui/material";

export const PlantInfoContainer = ({ selectedPlant }) => {

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
          {selectedPlant.image_url && (
            <Box
              component="img"
              src={selectedPlant.image_url}
              alt={selectedPlant.name}
              width={"200px"}
              height={"200px"}
              ml={'auto'}
              mr={'auto'}
            />
          )}

          <Box sx={{width: {xs: '100%', md: '75%'}}}>
            <Typography variant="h5" pb={2}>
              {selectedPlant.name ||
                selectedPlant.common_name ||
                selectedPlant.scientific_name}
            </Typography>

            <Typography
              variant="subtitle2"
              pb={1}
              sx={{ display: "flex", justifyContent: 'space-around' }}
            >
              <span style={{ fontWeight: "bold" }}>Family:</span>{" "}
              {selectedPlant.family}
            </Typography>

            <Typography
              variant="subtitle2"
              pb={1}
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <span style={{ fontWeight: "bold" }}>Genus:</span>{" "}
              {selectedPlant.genus}
            </Typography>
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
