import { Box, Typography } from "@mui/material";

import pottedPlant from "../../../assets/generic_potted_plant.png";

const PlantDetails = ({ plantData, theme }) => {
  const plantProperties = {
    scientificName: plantData.plantData.scientific_name,
    genus: plantData.plantData.genus,
    family: plantData.plantData.family,
    commonName: plantData.plantData.plantName,
    varietyName: plantData.plantData.varietyName,
    description: plantData.plantData.description,
  };

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
        alt={"Plant Image"}
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
          {plantProperties.commonName}
        </Typography>

        {/* Plant details (Desc, names, etc*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            pl: 2,
            pr: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ color: "text.main" }}
          >
            {plantProperties.varietyName}{" "}
          </Typography>

          {plantProperties.scientificName && (
            <Typography
              variant="caption"
              fontWeight={600}
              sx={{ color: "text.subtitle" }}
            >
              {`${plantProperties.scientificName} (${plantProperties.genus} ${plantProperties.family})`}
            </Typography>
          )}
        </Box>

        <Typography variant="subtitle1" pt={1} sx={{ color: "text.cardTitle" }}>
          {plantProperties.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default PlantDetails;
