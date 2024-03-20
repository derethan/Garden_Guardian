import { Box, Container, Typography } from "@mui/material";

import sensorDiagram from "../../assets/sensorDiagram.png";
import { PrimaryButton } from "../PrimaryButton";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const InfoGraphicSection = () => {
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
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Empowering Your green Thumb
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
        Revolutionizing Gardening with Smart Monitoring and Management
      </Typography>

      <Box
        component={"img"}
        src={sensorDiagram}
        alt={"Sensor Diagram"}
        sx={{
          padding: 2,
          ml: "auto",
          mr: "auto",
          width: { xs: "100%", md: "500px" },
        }}
      />
      <Link to="/info">
        <PrimaryButton text={"Learn More"} />
      </Link>
    </Container>
  );
};

export default InfoGraphicSection;
