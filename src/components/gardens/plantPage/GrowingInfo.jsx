import { Box, Card, Grid, Typography } from "@mui/material";

//Import icons
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HumidityIcon from "@mui/icons-material/Opacity";
import TemperatureIcon from "@mui/icons-material/Thermostat";
import Chart from "@mui/icons-material/InsertChartOutlined";
import StraightenIcon from "@mui/icons-material/Straighten";

const GrowingInfo = ({ gardenPlant }) => {
  const plantData = gardenPlant.plantData;
  
  // Extracting the Plant Growth Properties That are to be displayed
  let howtoSow = plantData.howToSow.replace("(Show °C/cm)", "") || "N/A";
  howtoSow = howtoSow.replace("(Show °F/in)", "") || "N/A";

  const spacing = plantData.spacing || "N/A";

  const Temperature = plantData.temperature || "N/A";

  const harvestTime = plantData.harvestTime || "N/A";
  const plantsToavoid =
    plantData.avoid.replace("Avoid growing close to:", "").trim() || "N/A";
  const plantWith =
    plantData.growsWith
      .replace("Compatible with (can grow beside):", "")
      .trim() || "N/A";

  //Contains the Properties to display in the Growing Info Section.
  // Each Property has a label, value and an icon
  const growthProps = [
    {
      label: "How to Sow",
      value: howtoSow,
      icon: AgricultureIcon,
    },
    {
      label: "Spacing",
      value: spacing,
      icon: StraightenIcon,
    },
    {
      label: "Temperature",
      value: Temperature,
      icon: TemperatureIcon,
    },
    {
      label: "Harvest Time",
      value: harvestTime,
      icon: ContentCutIcon,
    },
    {
      label: "Avoid Planting With",
      value: plantsToavoid,
      icon: WarningAmberIcon,
    },
    {
      label: "Compatible Plants",
      value: plantWith,
      icon: ThumbUpAltIcon,
    },
  ];

  return (
    <Card
      variant="light"
      sx={{
        p: 2,
        borderRadius: 4,
        width: { xs: "100%", md: "65%" },
      }}
    >
      <Typography variant="h4" color={"text.main"} pt={4} pl={2}>
        Growing Information
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          textAlign: "left",
          mt: 2,
          p: 2,
        }}
      >
        {growthProps.map(
          (property, index) =>
            property.value != "N/A" && (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    margin: "auto",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    color={"primary"}
                    gutterBottom
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    {property.icon && <property.icon />}
                    {property.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    color={"text.subtitle"}
                    gutterBottom
                  >
                    {property.value}
                  </Typography>
                </Box>
              </Grid>
            )
        )}
      </Grid>
    </Card>
  );
};

export default GrowingInfo;
