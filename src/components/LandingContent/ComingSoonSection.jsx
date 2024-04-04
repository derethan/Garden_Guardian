import { Container, Typography } from "@mui/material";
import { PrimaryButton } from "../PrimaryButton";

const ComingSoonSection = () => {
  return (
    <Container
      component="section"
      sx={{
        mt: 3,
        mb: 3,
        p: 4,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        gutterBottom
        sx={{ fontWeight: "bold" }}
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

      <PrimaryButton text={"Sign Up"} />
    </Container>
  );
};

export default ComingSoonSection;
