import { Skeleton } from "@mui/material";
import { Box, Grid } from "@mui/material";

const LoadingScreen = () => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        padding: "20px",
        }}>
        
    
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" height='100%'>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="80%" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width="100%" height={200} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="40%" />
        </Grid>
        <Grid item xs={12} sm={12}>
            <Skeleton variant="rectangular" width="100%" height={100} />
            </Grid>
      </Grid>
    </Box>
  );
};

export default LoadingScreen;
