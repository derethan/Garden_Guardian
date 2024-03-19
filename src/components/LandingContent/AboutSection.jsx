import { Container, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Container component="section" sx={{
        mt: 3,
        mb: 3,
        p: 2,
        boxShadow: 2,
    }}>
      <Typography variant="h5" component="h5" fontWeight="bold" textAlign="left" ml="8px">
        About Us
      </Typography>
      <Typography variant="body2" component="p" pt='1rem'>
        Here at Garden Guardian, we are not just developing an agricultural IoT
        platform; we are cultivating a sustainable future. 
        <br /><br />
        Our mission is to make gardening accessible to everyone, regardless of their experience level. 
        We believe that by empowering individuals to grow their own food, we can create a more sustainable world. 
        <br /><br />
        Our platform provides real-time sensor data and historical insights, essential tools for planning and managing gardens, and AI integration for advanced scheduling and crop management.
      </Typography>
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