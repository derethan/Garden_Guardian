import LandingSiteNav from "../components/nav/LandingSiteNav";

import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";

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
                  sx={{ color: "text.main", fontFamily: "title.main" }}
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
                    we are cultivating a sustainable future for everyone.
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
                <Typography variant="body2" align="left" pt={4} p={2}>
                  In times of rising living costs, we believe in equipping
                  individuals with the tools to be more self-reliant. <br />
                  <br /> Our platform makes small-scale farming accessible to
                  all, enabling people to grow their own food easily. <br />
                  <br />
                  This not only alleviates financial burdens but also allows
                  everyone to contribute to environmental conservation.
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
                <Typography variant="body2" align="left" pt={4} p={2}>
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
                <Typography variant="body2" align="left" pt={4} p={2}>
                  Currently in the development phase, we are actively refining
                  our platform to meet the needs of both home-based enthusiasts
                  and greenhouse operators.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ pt: 8, pb: 6 }}>
          <Typography variant="h4" align="center" sx={{ color: "text.main" }}>
            Hi, I'm Andrew
          </Typography>
          <Typography
            variant="caption"
            align="center"
            color={"text.subtitle"}
            fontWeight={"bold"}
          >
            (The developer behind Garden Guardian)
          </Typography>
        </Box>

        <Grid container spacing={3} pb={4} justifyContent={"center"}>
          <Grid item xs={12} md={6}>
            <Card variant="light">
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ color: "text.main" }}
                >
                  The Story Behind Garden Guardian
                </Typography>
                <Typography variant="body2" align="left" pt={4} p={2}>
                  My Roomate and Myself started Garden Guardian as a simple IoT
                  Device and webpage to assist in tracking the conditions of our
                  Gardens and Greenhouse.
                  <br />
                  <br />
                  Over the course of my React Module with Get Coding it has
                  quickly evolved into a IoT enabled platform that combines
                  Realtime Sensor data with an easy to use interface to track
                  garden related information and plant data.
                  <br />
                  <br />
                  This has removed the need for manual record keeping and has
                  saved allot of my time and effort on what would have otherwise
                  been repetitive daily tasks, allowing me to focus on what
                  matters most, the plants.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="light">
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ color: "text.main" }}
                >
                  A Personal Note on Gardening
                </Typography>
                <Typography variant="body2" align="left" pt={4} p={2}>
                  I myself feel that many of us have become overly reliant on
                  large retailers and grocery chains as our only way to get by.
                  leading to rising costs that are unsustainable for many of us.
                  <br />
                  <br />
                  Growing our own food can reduce our dependence on expensive
                  groceries and provide us with a sense of security. This simple
                  approach has been practiced by our grandparents and
                  generations before them throughout history.
                  <br />
                  <br />
                  For those interested in growing their own food, here's some
                  helpful words of advice:
                  <br />
                  <br />
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#555",
                    }}
                  >
                    "Turn any available property into a productive space.
                    Instead of growing grass, grow something that you can use."
                  </span>
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
