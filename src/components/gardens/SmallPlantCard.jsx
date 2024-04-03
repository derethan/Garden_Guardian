import { Box, Typography } from "@mui/material";
import ButtonCard from "../ButtonCard";

export const SmallPlantCard = ({ plant }) => {
  return (
    <ButtonCard
      sx={{
        mb: 4,
      }}
      //   title={plant.label}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          pl: 2,
          pr: 2,
        }}
      >
        {plant.image_url && (
          <Box
            component="img"
            src={plant.image_url}
            alt={plant.label}
            width={"75px"}
            height={"75px"}
            sx={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        )}
        <Typography variant="body1" sx={{fontWeight: 'bold', fontSize: '14px'}}>{plant.label}</Typography>
      </Box>
    </ButtonCard>
  );
};
