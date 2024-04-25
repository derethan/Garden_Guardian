import { Box, Typography } from "@mui/material";
import ButtonCard from "./ButtonCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  // Initialize the Navigation Hook
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/gardens");
  };

  return (
    <ButtonCard
      sx={{
        mt: 4,
        mb: 4,
        width: { xs: "100%", md: "inherit" },
        backgroundColor: "background.lightGrey",
        boxShadow: "none",
        border: "3px dashed #2A2A2A",
        "&:hover": {
          backgroundColor: "background.lightGrey",
          "@media (hover: none)": {
            backgroundColor: "initial",
          },
        },
      }}
      onClick={handleclick}
    >
      <Typography variant="h6" color={"text.main"} fontWeight={"bold"}>
        Garden Overview
      </Typography>

      <Typography variant="h6" pt={2} pb={2}>
        No Gardens Found!
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          pb: 4,
        }}
      >
        <AddCircleOutlineIcon />

        <Typography variant="body1">
          Click here to head over to the Crop Management Page to Get Started
        </Typography>
      </Box>
    </ButtonCard>
  );
};

export default NotFound;
