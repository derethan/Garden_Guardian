import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  Typography,
  useTheme,
  Card,
} from "@mui/material";
import PlantIcon from "@mui/icons-material/YardOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HumidityIcon from "@mui/icons-material/Opacity";
import TemperatureIcon from "@mui/icons-material/Thermostat";
import Chart from "@mui/icons-material/InsertChartOutlined";

import pottedPlant from "../assets/generic_potted_plant.png";

import { useEffect, useState } from "react";
import BreadCrumbNav from "../components/nav/BreadCrumbNav";

export const Plant = () => {
  const theme = useTheme();
  let { plantID } = useParams();

  const storedPlants = JSON.parse(localStorage.getItem("gardenPlants"));
  const initialPlantData = storedPlants
    ? storedPlants.filter((plant) => plant.plantID === plantID)
    : [];
  const [plantData, setPlantData] = useState(initialPlantData[0] || {});

  const sowInstructions = plantData.howtoSow.split(".");
  const Temperature =sowInstructions[sowInstructions.length - 2];

  const plantProperties = [
    { label: "Scientific Name", value: plantData.scientific_name },
    { label: "Genus", value: plantData.genus },
    { label: "Family", value: plantData.family },
    { label: "Common Name", value: plantData.commonName },
    { label: "Description", value: plantData.description },
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
      value: Temperature || "N/A",
      icon: TemperatureIcon,
    },
    {
      label: "Nutrient Profile",
      value: plantData.fertilizer || "N/A",
      icon: Chart,
    },
  ];

  useEffect(() => {
console.log("plantData", plantData);
console.log(Temperature);


  }, []);

  return (
    <Container maxWidth="none">
      {/* BreadCrumb Navigation Section*/}

      {/* BreadCrumbs*/}
      <BreadCrumbNav
        plantName={
          plantData.name || plantData.commonName || plantData.scientificName
        }
        Icon={PlantIcon}
        path={"Crop Management"}
      />

      {/* Plant Details Section*/}
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
          alt={
            plantData.name || plantData.commonName || plantData.scientificName
          }
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
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "text.cardTitle" }}
          >
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
          alignItems: "center",
          margin: "auto",
          width: "100%",
          mt: 4,
          gap: 2,
        }}
      >
        {/* My Plant Section*/}
        <Card
          variant="light"
          sx={{
            p: 2,
            borderRadius: 4,
            width: { xs: "100%", md: "30%" },
          }}
        >
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
        </Card>

        {/* Growing Info Section*/}
        <Card
          variant="light"
          sx={{
            p: 2,
            borderRadius: 4,
            width: { xs: "100%", md: "65%" },
          }}
        >
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
        </Card>
      </Box>
    </Container>
  );
};
