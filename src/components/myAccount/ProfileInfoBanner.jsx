/* eslint-disable react/prop-types */
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

const ProfileInfoBanner = ({ user, isMobile }) => {
  const userFields = {
    "Full Name": user.name,
    "Email Address": user.email,


    "Your location": user.location ? user.location : "location Not Set",
  };
      // TODO: Account for Multiple Locations, Perhaps add a function to check for locations
    // from Created Gardens, if any. Then Add Location array to the userFields objects Your Location field



  
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          backgroundColor: "background.lightGrey",
          padding: "1rem",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Profile Information
        </Typography>

        {/* Grid container to display user information */}
        <Grid container spacing={3} sx={{ mt: 2 }}>

            {/* Map through the userFields object to display user information */}
          {Object.keys(userFields).map((field) => (
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
              }}
              key={field}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  ml: isMobile ? 0 : "auto",
                  mr: isMobile ? 0 : "auto",
                }}
              >
                <Typography variant="body1" color={'primary.secondary'} fontWeight={'bold'}>{field}</Typography>
                <Typography variant="subtitle2" color={'text.secondary'} fontWeight={'bold'} >{userFields[field]}</Typography>
              </Box>

                {/* Add a Divider component if the current field is not the last one */}
              {Object.keys(userFields).indexOf(field) !==
                Object.keys(userFields).length - 1 && (
                <Divider
                  orientation={isMobile ? "horizontal" : "vertical"}
                  flexItem
                  sx={{
                    mt: isMobile ? 2 : 0,
                    mb: isMobile ? 2 : 0,
                    ml: isMobile ? 0 : "auto",
                  }}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfileInfoBanner;

{
  /* <Grid
  item
  xs={12}
  md={4}
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      ml: isMobile ? 0 : "auto",
    }}
  >
    <Typography variant="body1">Full Name</Typography>
    <Typography variant="body2">{user.name}</Typography>
  </Box>

  <Divider
    orientation={isMobile ? "horizontal" : "vertical"}
    flexItem
    sx={{
      mt: isMobile ? 2 : 0,
      mb: isMobile ? 2 : 0,
      ml: isMobile ? 0 : "auto",
    }}
  />
</Grid>; */
}
