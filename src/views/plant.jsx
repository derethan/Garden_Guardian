// Desc: This file contains the Plant component which is the Dynamic Plant Page that displays the details of a specific plant.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Import MUI Components
import { Container, Box, useTheme } from "@mui/material";

//Import Components
import BreadCrumbNav from "../components/nav/BreadCrumbNav";
import PlantDetails from "../components/gardens/plantPage/PlantDetails";
import MyPlant from "../components/gardens/plantPage/MyPlant";
import GrowingInfo from "../components/gardens/plantPage/GrowingInfo";

//Import icons
import PlantIcon from "@mui/icons-material/YardOutlined";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HumidityIcon from "@mui/icons-material/Opacity";
import TemperatureIcon from "@mui/icons-material/Thermostat";
import Chart from "@mui/icons-material/InsertChartOutlined";
import StraightenIcon from "@mui/icons-material/Straighten";

const Plant = () => {
  const theme = useTheme();
  let { plantID } = useParams();

  //Fetching Plant Data from Local Storage
  const storedPlants = JSON.parse(localStorage.getItem("gardenPlants"));
  const initialPlantData = storedPlants
    ? storedPlants.filter((plant) => plant.plantID === plantID)
    : [];

  //State to store the Current Plant Data
  const [plantData, setPlantData] = useState(initialPlantData[0] || {});

  //Contains the  Properties to diplay For the Plant Header
  const plantProperties = [
    { label: "Scientific Name", value: plantData.scientific_name },
    { label: "Genus", value: plantData.genus },
    { label: "Family", value: plantData.family },
    { label: "Common Name", value: plantData.commonName },
    { label: "Description", value: plantData.description },
  ];

  // Extracting the Plant Growth Properties That are to be displayed
  const sowInstructions = plantData.howtoSow.split(".").filter((item) => item);
  const sowInstructionsAllButLastTwo = sowInstructions.slice(0, -2);
  const howtoSow = sowInstructionsAllButLastTwo.join(". ") + ".";
  const spacing = plantData.spacing || "N/A";
  const Temperature = sowInstructions[sowInstructions.length - 2] || "N/A";
  const harvestTime = plantData.harvestTime || "N/A";
  const plantsToavoid =
    plantData.avoid.replace("Avoid growing close to:", "").trim() || "N/A";
  const plantWith =
    plantData.growsWith
      .replace("Compatible with (can grow beside):", "")
      .trim() || "N/A";

  //Contains the Properties to display in the Growing Info Section.
  // Each Property has a label, value and an icon
  const growthProps = [
    {
      label: "How to Sow",
      value: howtoSow,
      icon: AgricultureIcon,
    },
    {
      label: "Spacing",
      value: spacing,
      icon: StraightenIcon,
    },
    {
      label: "Temperature",
      value: Temperature,
      icon: TemperatureIcon,
    },
    {
      label: "Harvest Time",
      value: harvestTime,
      icon: ContentCutIcon,
    },
    {
      label: "Avoid Planting With",
      value: plantsToavoid,
      icon: WarningAmberIcon,
    },
    {
      label: "Compatible Plants",
      value: plantWith,
      icon: ThumbUpAltIcon,
    },
  ];

  useEffect(() => {
    console.log("plantData", plantData);
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
          alignItems: "flex-start",
          margin: "auto",
          width: "100%",
          mt: 4,
          gap: 2,
          mb: 4,
        }}
      >
        {/* My Plant Section 
        - Component for customizing Properties specific to each plant the user has growing
        */}
        <MyPlant plantData={plantData} />

        {/* Growing Info Section*/}
        <GrowingInfo plantData={plantData} growthProps={growthProps} />
      </Box>
    </Container>
  );
};

export default Plant;
