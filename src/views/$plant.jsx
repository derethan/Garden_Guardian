import { useParams, Link } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  Breadcrumbs,
  Typography,
  useTheme,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import GardenIcon from "@mui/icons-material/GrassOutlined";
import PlantIcon from "@mui/icons-material/YardOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HumidityIcon from "@mui/icons-material/Opacity";
import TemperatureIcon from "@mui/icons-material/Thermostat";
import Chart from "@mui/icons-material/InsertChartOutlined";

import pottedPlant from "../assets/generic_potted_plant.png";

import { useEffect, useState } from "react";

export const Plant = () => {
  const theme = useTheme();
  let { plantID } = useParams();

  const storedPlants = JSON.parse(localStorage.getItem("gardenPlants"));
  const initialPlantData = storedPlants
    ? storedPlants.filter((plant) => plant.plantID === plantID)
    : [];
  const [plantData, setPlantData] = useState(initialPlantData[0] || {});

  const plantProperties = [
    { label: "Scientific Name", value: plantData.scientific_name },
    { label: "Genus", value: plantData.genus },
    { label: "Family", value: plantData.family },
  ];

  const growthProps = [
    { label: "Light", value: plantData.light || "N/A", icon: WbSunnyIcon },
    {
      label: "Humidity",
      value: plantData.humidity || "N/A",
      icon: HumidityIcon,
    },
    {
      label: "Temperature",
      value: plantData.temperature || "N/A",
      icon: TemperatureIcon,
    },
    {
      label: "Nutrient Profile",
      value: plantData.fertilizer || "N/A",
      icon: Chart,
    },
  ];

  // useEffect(() => {
  //   const plant = plantData.slug || plantData.name
  //   const  url = import.meta.env.VITE_API_URL + "api/plants/" + plant;

  //   const fetchPlantInfo = async () => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data.data.main_species);
  //   };

  //   fetchPlantInfo();

  // }, []);

  return (
    <Container maxWidth="none">
      {/* BreadCrumb Navigation Section*/}
      <Box
        pt={4}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* BreadCrumbs*/}
        <div
          style={{
            backgroundColor: theme.palette.background.lightGrey,
            padding: "8px",
            width: "fit-content",
          }}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              color="inherit"
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <HomeIcon fontSize="inherit" sx={{ mr: 1 }} />
              <Typography
                color="text.cardTitle"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
              >
                Home
              </Typography>
            </Link>

            <Link
              color="inherit"
              to="/gardens"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <GardenIcon fontSize="inherit" sx={{ mr: 1 }} />
              <Typography
                color="text.cardTitle"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
              >
                Crop Management
              </Typography>
            </Link>

            <Typography
              color="primary.secondary"
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              <PlantIcon
                fontSize="inherit"
                sx={{ mr: 1, color: "primary.secondary" }}
              />

              {plantData.name ||
                plantData.commonName ||
                plantData.scientificName}
            </Typography>
          </Breadcrumbs>
        </div>

        {/* Arrow For BreadCrumbs*/}
        <div
          style={{
            width: "0",
            height: "0",
            borderTop: "20px solid transparent",
            borderBottom: "20px solid transparent",
            borderLeft: "20px solid " + theme.palette.background.lightGrey,
          }}
        />
      </Box>

      {/* Plant Details Section*/}
      <Box
        mt={4}
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          pt: { xs: 2, md: 4 },
        }}
      >
        <Box
          component={"img"}
          src={plantData.image_url || pottedPlant}
          alt={
            plantData.name || plantData.commonName || plantData.scientificName
          }
          sx={{ width: {xs: '200px', md: '300px'}, height: {xs: '200px', md: '300px'}, borderRadius: "10%" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            backgroundColor: theme.palette.background.lightGrey,
            width: { xs: "100%", md: "50%" },
            pt: 2,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "text.cardTitle" }}
          >
            {plantData.name || plantData.commonName || plantData.scientificName}
          </Typography>

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

      <Box
        maxWidth={"lg"}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          margin: "auto",
          width: "100%",
        }}
      >
        {/* My Plant Section*/}
        <Box pl={2} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" gutterBottom pt={4}>
            My Plant
          </Typography>

          <Box>
            <Typography variant="body1" gutterBottom>
              Planted on:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Growth Status:
            </Typography>
          </Box>
        </Box>

        {/* Growing Info Section*/}
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h4" pt={4} pl={2}>
            Growing Information
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              pt: 2,
            }}
          >
            {growthProps.map((property, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    margin: "auto",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    color={"primary"}
                    gutterBottom
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    {property.icon && <property.icon />}
                    {property.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    color={"text.subtitle"}
                    gutterBottom
                  >
                    {property.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

/*

        <Typography variant="h6" gutterBottom>
          {plantData.scientificName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.watering}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.light}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.soil}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.temperature}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.humidity}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.fertilizer}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.pruning}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.propagation}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.harvesting}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {plantData.problems}
        </Typography>

        */
