import { Box, Typography, useTheme } from "@mui/material";

const HeroBanner = () => {
    const theme = useTheme();

    return (
        <Box
        name="sensorBanner"
        sx={{
          backgroundColor: "background.lightGrey",
          padding: "1rem",
          borderRadius: 5,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{
            color: theme.typography.primary.main,
          }}
        >
          Crop Management
        </Typography>

        <Typography
          variant="h6"
          mt={2}
          sx={{
            color: theme.typography.primary.cardTitle,
          }}
        >
          Welcome to your personal Crop Management Page.
        </Typography>
        <Typography
          variant="subtitle2"
          mt={1}
          sx={{
            color: theme.typography.primary.subtitle,
          }}
        >
          Here is where you interact with your Gardens & Greenhouses.
        </Typography>
      </Box>

    );

};


export default HeroBanner;