import { useAuth } from "../hooks/useAuthProvider";
import { Container, Box, Typography, Divider } from "@mui/material";

import DashboardHeader from "../components/dashboard/Header";
import PlantOverview from "../components/dashboard/PlantOverview";
import SummaryColumn from "../components/sensorData/SummaryColumn";


const Dashboard = () => {
  const { user, hasDevice } = useAuth();
  const name = user.name.split(" ")[0];

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
          width: hasDevice ? "70%" : "100%",
        }}
      >

        {/* Display the Dashboard Header */}
        <DashboardHeader name={name} />


        {/* Display A Quick overview */}
        <PlantOverview user={user} />

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
