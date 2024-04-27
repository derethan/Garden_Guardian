import { Box, Typography } from "@mui/material";
import ButtonCard from "./ButtonCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useNavigate } from "react-router-dom";

const NotFound = ({ location, title, ...props }) => {
  // Initialize the Navigation Hook
  const navigate = useNavigate();

  const handleclick = () => {
    navigate(location);
  };

  return (
    <ButtonCard
      sx={{
        mt: 4,
        mb: 4,
        maxWidth: { xs: "100%", md: "500px" },
        height: "250px",
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
      <Typography variant="h6" color={"text.main"} fontWeight={"bold"} pt={2}>
        {title}
      </Typography>

      <Typography variant="h6" pt={2} pb={2}>
        {props.subtitle || "No Data Found"}
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
          Click here to Get Started
        </Typography>
      </Box>
    </ButtonCard>
  );
};

export default NotFound;
