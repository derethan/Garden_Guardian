import { Box, Typography } from "@mui/material";

import pottedPlant from "../../../assets/generic_potted_plant.png";

const PlantDetails = ({ plantData, plantProperties, theme }) => {
  return (
    <Box
      mt={4}
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        pt: { xs: 2, md: 4 },
        margin: "auto",
      }}
    >
      {/* Plant Image*/}
      <Box
        component={"img"}
        src={plantData.image_url || pottedPlant}
        alt={plantData.name || plantData.commonName || plantData.scientificName}
        sx={{
          width: { xs: "200px", md: "300px" },
          height: { xs: "200px", md: "300px" },
          borderRadius: "10%",
        }}
      />

      {/* Plant Name and Description Banner*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          borderRadius: 4,
          backgroundColor: theme.palette.background.lightGrey,
          width: { xs: "100%", md: "50%" },
          mt: 2,
          pt: 2,
        }}
      >
        {/* Plant Name Header*/}
        <Typography variant="h4" gutterBottom sx={{ color: "text.cardTitle" }}>
          {plantData.name || plantData.commonName || plantData.scientificName}
        </Typography>

        {/* Plant details (Desc, names, etc*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            pt: 2,
            pb: 2,
          }}
        >
          {/* common name, genus, family */}
          {plantProperties
            .filter((property) => property.value)
            .map(
              (property, index) =>
                property.value && (
                  <Box
                    key={property.label}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      borderLeft: index === 0 ? "none" : "1px solid darkGrey",
                      pl: 2,
                      pr: 2,
                    }}
                  >
                    <Typography
                      variant="caption"
                      fontWeight={600}
                      sx={{ color: "text.main" }}
                    >
                      {property.label}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      pt={1}
                      sx={{ color: "text.cardTitle" }}
                    >
                      {property.value}
                    </Typography>
                  </Box>
                )
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default PlantDetails;
