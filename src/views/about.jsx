import LandingSiteNav from "../components/nav/LandingSiteNav";

import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <LandingSiteNav />

      <Container sx={{ pt: 4 }}>
        <Grid container spacing={3} pb={4}>
          <Grid item xs={12}>
            <Card variant="light">
              <CardContent>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{ color: "text.main",
                fontFamily: "title.main",
              }}
                >
                  Garden Guardian
                </Typography>
                <Typography
                  variant="caption"
                  align="center"
                  sx={{
                    color: "text.subtitle",
                    fontWeight: "bold",
                  }}
                >
                  Monitor, Manage, and Grow with Ease
                </Typography>

                <Typography
                  variant="caption"
                  component="p"
                  pt="1rem"
                  color={"text.cardTitle"}
                  fontWeight={"bold"}
                >
                  Here at Garden Guardian, we are not just developing an
                  agricultural IoT platform;{" "}
                  <Typography
                    variant="caption"
                    component="span"
                    color={"text.main"}
                    fontWeight={"bold"}
                  >
                    we are cultivating a sustainable future for all.
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="light">
              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ color: "text.main" }}
                >
                  Economic Viability
                </Typography>
                <Typography variant="body2" align="left" pt={4}>
                  In times of rising living costs, we believe in equipping
                  individuals with the tools to be more self-reliant. <br /><br /> Our
                  platform makes small-scale farming accessible to all, enabling
                  people to grow their own food easily. <br /><br />This not only alleviates
                  financial burdens but also allows everyone to contribute to
                  environmental conservation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="light">
              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ color: "text.main" }}
                >
                  Environmental Stewardship
                </Typography>
                <Typography variant="body2" align="left" pt={4}>
                  We empower people to optimize their growing environments,
                  reducing waste, and the use of fertilizers. Our technology
                  supports regenerative agricultural practices, helping to
                  sustain our planet for future generations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="light">
              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ color: "text.main" }}
                >
                  Growing Towards the Future
                </Typography>
                <Typography variant="body2" align="left" pt={4}>
                  Currently in the development phase, we are actively refining
                  our platform to meet the needs of both home-based enthusiasts
                  and greenhouse operators.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
