import { useAuth } from "../hooks/useAuthProvider";
import { Container, Button } from "@mui/material";

import SideBarWrapper from "../components/SideBarWrapper";

const Dashboard = () => {
  const user = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>

      <SideBarWrapper />

      <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            user.logout();
          }}
        >
          Log Out
        </Button>
      </Container>
    </div>
  );
};

export default Dashboard;
