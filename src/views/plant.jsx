// Desc: This file contains the Plant component which is the Dynamic Plant Page that displays the details of a specific plant.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Import MUI Components
import { Container, Box, useTheme } from "@mui/material";

//import Context Providers
import { useGarden } from "../contextProviders";
import { useGardenFunctions } from "../components/gardens/utils/useGardenFunctions";

//Import Components
import BreadCrumbNav from "../components/nav/BreadCrumbNav";
import PlantDetails from "../components/gardens/plantPage/PlantDetails";
import MyPlant from "../components/gardens/plantPage/MyPlant";
import GrowingInfo from "../components/gardens/plantPage/GrowingInfo";

//Import icons
import PlantIcon from "@mui/icons-material/YardOutlined";

const Plant = () => {
  const theme = useTheme();
  const { plantID } = useParams();

  const { gardenPlants } = useGarden();
  const { updateGardenData } = useGardenFunctions();

  const [plantData, setPlantData] = useState(null);

  useEffect(() => {
    //If the gardenPlants is not available, fetch the data
    if (!gardenPlants) {
      updateGardenData();
    } else {
      
      const plant = gardenPlants.find(
        (plant) => plant.gardenPlantID == plantID
      );
      setPlantData(plant);
    }
  }, [gardenPlants]);

  if (!plantData) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="none">
      {/* BreadCrumb Navigation Section*/}
      <BreadCrumbNav
        plantName={plantData.customName}
        Icon={PlantIcon}
        path={"Crop Management"}
      />

      {/* Plant Details Section*/}
      <PlantDetails plantData={plantData} theme={theme} />

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
        <GrowingInfo gardenPlant={plantData} />
      </Box>
    </Container>
  );
};

export default Plant;
