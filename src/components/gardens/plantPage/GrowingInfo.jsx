import { Box, Card, Grid, Typography } from "@mui/material";

const GrowingInfo = ({ plantData, growthProps }) => {
  return (
    <Card
      variant="light"
      sx={{
        p: 2,
        borderRadius: 4,
        width: { xs: "100%", md: "65%" },
      }}
    >
      <Typography variant="h4" color={'text.main'}  pt={4} pl={2}>
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
