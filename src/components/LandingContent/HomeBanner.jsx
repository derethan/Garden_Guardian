import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../PrimaryButton";
import BannerImage from "../../assets/landingGardenHeader.png";


const HomeBanner = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/login");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: "3rem",
        margin: "1rem",
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "white",
          textShadow: "1px 1px 2px #000",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          padding: "2rem",
        }}
      >
        Monitor, Manage and Grow with Ease
      </Typography>
      <PrimaryButton text="Get Started" onClick={handleClick} />
    </Container>
  );
};

export default HomeBanner;
