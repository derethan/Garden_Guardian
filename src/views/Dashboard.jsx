import { useAuth } from "../hooks/useAuthProvider";
import { Container, Box, Typography, Divider } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 2,
          width: hasDevice ? "70%" : "100%",
        }}
      >
        <Typography variant="h4">Welcome, {name}!</Typography>
      </Box>

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
