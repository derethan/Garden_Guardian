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

import { useEffect, useState } from "react";
import BreadCrumbNav from "../components/nav/BreadCrumbNav";
import PlantDetails from "../components/gardens/plantPage/PlantDetails";
import MyPlant from "../components/gardens/plantPage/MyPlant";
import GrowingInfo from "../components/gardens/plantPage/GrowingInfo";

 const Plant = () => {
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
    { label: "Common Name", value: plantData.commonName },
    { label: "Description", value: plantData.description },
  ];

  const sowInstructions = plantData.howtoSow.split(".");
  const Temperature = sowInstructions[sowInstructions.length - 2];
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
    {
      label: "fff Profile",
      value: plantData.fertilizer || "N/A",
      icon: Chart,
    },
  ];

  useEffect(() => {
    // console.log("plantData", plantData);
    // console.log(sowInstructions);
  }, []);

  return (
    <Container maxWidth="none">
      {/* BreadCrumb Navigation Section*/}
      <BreadCrumbNav
        plantName={
          plantData.name || plantData.commonName || plantData.scientificName
        }
        Icon={PlantIcon}
        path={"Crop Management"}
      />

      {/* Plant Details Section*/}
      <PlantDetails
        plantData={plantData}
        plantProperties={plantProperties}
        theme={theme}
      />

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
        {/* My Plant Section 
        - Component for customizing Properties specific to each plant the user has growing
        */}
        <MyPlant plantData={plantData} />


        {/* Growing Info Section*/}
        {/* <GrowingInfo plantData={plantData} growthProps={growthProps} /> */}

      </Box>
    </Container>
  );
};

export default Plant;
