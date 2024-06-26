import { Container, Grid, Typography } from "@mui/material";


//Import MUI Icons
import FeatureIcon from "../FeatureIcon";
import SensorsIcon from '@mui/icons-material/Sensors';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import SeedlingIcon from "../icons/SeedlingIcon";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import GrassIcon from '@mui/icons-material/Grass';

const KeyFeaturesSection = () => {

  return (
    <Container
      component="section"
      sx={{
        mt: 3,
        mb: 3,
        p: 2,
        boxShadow: 2,
        backgroundColor: "background.default",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        gutterBottom
        color={"text.main"}
        sx={{ fontWeight: "bold" }}
      >
        Key Features
      </Typography>

      <Grid container spacing={2} pt={2}>
        <Grid item xs={12} md={4}>
          <FeatureIcon
            icon={SensorsIcon}
            title="Real-time Monitoring"
            description="Stay up to date with live data"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureIcon
            icon={GrassIcon}
            title="Crop Management"
            description="Keep track of your plants and their needs"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureIcon
            icon={SeedlingIcon}
            title="Gardening Tips"
            description="Get expert advice for your plants"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureIcon
            icon={AnalyticsOutlinedIcon}
            title="Data Analysis"
            description="Track and analyze your garden's data"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureIcon
            icon={LanguageOutlinedIcon}
            title="Global Access"
            description="Manage your garden from anywhere Internet is available"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureIcon
            icon={HealthAndSafetyOutlinedIcon}
            title="Plant Health"
            description="Stay informed about the health of your plants"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default KeyFeaturesSection;
