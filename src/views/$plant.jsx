import { useParams, Link } from "react-router-dom";
import { Container, Box, Breadcrumbs, Typography } from "@mui/material";

import { useState } from "react";

export const Plant = () => {
  let { plantID } = useParams();

  const storedPlants = JSON.parse(localStorage.getItem("gardenPlants"));
  const initialPlantData = storedPlants
    ? storedPlants.filter((plant) => plant.plantID === plantID)
    : [];
  const [plantData, setPlantData] = useState(initialPlantData[0] || {});

  console.log(plantData);

  return (
    <Container>
      <Box pt={4}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Home
          </Link>
          <Link color="inherit" to="/gardens">
            Crop Management
          </Link>
          <Typography color="textPrimary">
            {plantData.name || plantData.commonName || plantData.scientificName}
          </Typography>
        </Breadcrumbs>
      </Box>
    </Container>
  );
};
