import { Container, Box, Divider } from "@mui/material";

const SensorData = () => {
  return (
    <Container
    maxWidth="xl"
      sx={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <Box sx={{ border: "1px solid black", 
        width: "70%",
    }}>asdads</Box>
          <Divider orientation="vertical" flexItem />

      <Box sx={{ border: "1px solid black",
      width: "30%", 
    }}>asdsad</Box>
    </Container>
  );
};

export default SensorData;
