import { useAuth } from "../hooks/useAuthProvider";
import { Container, Box } from "@mui/material";


const Dashboard = () => {
  const user = useAuth();
  const name = user.user.name;
  console.log(name);

  return (
      <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <h2>Welcome {name}</h2>
        </Box>

      </Container>
  );
};

export default Dashboard;
