import { Box, Container, Typography } from "@mui/material";
import { PrimaryButton } from "../PrimaryButton";

import { useNavigate } from "react-router-dom";

//import Auth Context
import { useAuth } from "../../contextProviders";

const ComingSoonSection = () => {
  const { isLoggedIn } = useAuth();
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/register");
  };

  const handleDemoLogin = () => {
    Navigate("/login?demo=true");
  };

  return (
    <Container
      component="section"
      sx={{
        mt: 3,
        mb: 3,
        p: 4,
        boxShadow: 2,
        backgroundColor: "background.default",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        gutterBottom
        sx={{ fontWeight: "bold", color: "text.main" }}
      >
        Get Ready, We are Launching Soon...
      </Typography>
      <Typography
        variant="caption"
        component="p"
        gutterBottom
        sx={{
          color: "text.secondary",
          fontWeight: "bold",
        }}
      >
        We are working hard to bring you the best experience. Stay tuned for
        updates.
      </Typography>

      {!isLoggedIn && (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, pt: 2 }}>
          {/* <PrimaryButton text={"Create Account"} onClick={handleClick} /> */}
          <PrimaryButton text={"Try our Demo"} onClick={handleDemoLogin} />
        </Box>
      )}
    </Container>
  );
};

export default ComingSoonSection;
