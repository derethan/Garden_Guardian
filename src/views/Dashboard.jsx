import { useAuth } from "../hooks/useAuthProvider";
import { Container, Box, Typography } from "@mui/material";


const Dashboard = () => {
  const user = useAuth();
  const name = user.user.name.split(" ")[0];

  return (
      <Container maxWidth="none" sx={{ paddingTop: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4">Welcome, {name}!</Typography>
        </Box>

      </Container>
  );
};

export default Dashboard;
