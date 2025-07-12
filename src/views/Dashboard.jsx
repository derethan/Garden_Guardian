// React Imports
import { useEffect } from "react";

//Import Context Providers
import { useAuth, useGarden } from "../contextProviders";
import { useGardenFunctions } from "../components/gardens/utils/useGardenFunctions";

import { Container, Box, Divider } from "@mui/material";

import DashboardHeader from "../components/dashboard/Header";
import PlantOverview from "../components/dashboard/PlantOverview";
import SensorOverview from "../components/dashboard/SensorOverview";
import SummaryColumn from "../components/sensorData/SummaryColumn";

const Dashboard = () => {
  const { user, hasDevice, devices } = useAuth();
  const { gardens, gardenGroups, gardenPlants } = useGarden();
  const { updateGardenData } = useGardenFunctions();

  // Fetch the garden data from the API
  useEffect(() => {
    updateGardenData();
  }, []);

  return (
    <Container
      maxWidth="none"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingTop: 4,
      }}
    >
      {/* Primary Section of the Dashboard (Left Side Content) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          width: hasDevice ? { xs: "100%", md: "70%" } : "100%",
        }}
      >
        {/* Display the Dashboard Header */}
        <DashboardHeader name={user.name.split(" ")[0]} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 4,
            width: "100%",
          }}
        >
          {/* Display A Quick overview of the users Gardens */}
          <PlantOverview
            gardens={gardens}
            gardenGroups={gardenGroups}
            gardenPlants={gardenPlants}
          />

          {/* Display the Sensor Overview */}
          <SensorOverview user={user} hasDevice={hasDevice} devices={devices} />
        </Box>
      </Box>

      {/* Display the summary column only if the user has a device */}
      {hasDevice && (
        <Box sx={{ width: "30%", display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "block" },
            }}
          />
          <SummaryColumn />
        </Box>
      )}
    </Container>
  );
};

export default Dashboard;
