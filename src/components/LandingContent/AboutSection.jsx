import { Container, Typography, Box, colors } from "@mui/material";

const AboutSection = () => {
  return (
    <Container
      component="section"
      sx={{
        mt: 3,
        mb: 3,
        p: 2,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        fontWeight="bold"
        textAlign="center"
        ml="8px"
        color={"text.main"}
      >
        Here at Garden Guardian,
      </Typography>
      <Typography
        variant="caption"
        component="p"
        pt="1rem"
        color={"text.cardTitle"}
        fontWeight={"bold"}
      >
         We are not just developing an agricultural IoT
        platform;{" "}
        <Typography
          variant="caption"
          component="span"
          color={"text.main"}
          fontWeight={"bold"}
        >
          we are cultivating a sustainable future for everyone.
        </Typography>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", sm: "space-evenly" },
          alignItems: "center",
          mt: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            component="p"
            pt="1rem"
            color={"text.cardTitle"}
            fontWeight={"bold"}
          >
            The Goal
          </Typography>
          <Typography
            variant="caption"
            component="p"
            pt="1rem"
            color={"text.subtitle"}
            fontWeight={"bold"}
            maxWidth={"400px"}
          >
            Our mission is to make gardening accessible to everyone, regardless
            of their experience level. We believe that by empowering individuals
            to grow their own food, we can create a more sustainable future.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            component="p"
            pt="1rem"
            color={"text.cardTitle"}
            fontWeight={"bold"}
          >
            The Platform
          </Typography>
          <Typography
            variant="caption"
            component="p"
            pt="1rem"
            color={"text.subtitle"}
            fontWeight={"bold"}
            maxWidth={"400px"}
          >
            Our platform provides real-time sensor data and historical insights,
            essential tools for planning and managing gardens, and AI
            integration for Advanced Scheduling, Crop management and Gardening assistance.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutSection;

// Environmental Stewardship
// We empower companies to optimize their growing environments, reducing waste and the use of fertilizers. Our technology supports regenerative agricultural practices, helping to sustain our planet for future generations.

// Economic Viability
// In times of rising living costs, we believe in equipping individuals with the tools to be more self-reliant. Our platform makes small-scale gardening accessible to all, enabling people to grow their own food easily. This not only alleviates financial burdens but also allows everyone to contribute to environmental conservation.

// Innovative Technology for Growth
// Our custom IoT device and platform offer real-time sensor data and historical insights, essential tools for planning and managing gardens, and AI integration for advanced scheduling and crop management.
