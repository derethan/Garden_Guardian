import { Box, Card, Container, Typography, useTheme } from "@mui/material";
import emptyGreenhouse from "../assets/emptyField.jpg";

import { PrimaryButton } from "../components/PrimaryButton";

const Gardens = () => {
  const theme = useTheme();


    const handleClick = () => {
        console.log('You clicked the button')
    }


  return (
    <Container
      sx={{
        pt: 4,
        pb: 4,
      }}
    >
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
          Welcome to you personal Crop Management Page.
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


      <Card variant="light" sx={{ mt: 4, p: 2 }}>
        <Typography
          variant="h5"
          mt={2}
          sx={{ color: theme.typography.primary.cardTitle }}
        >
          Are you ready to get started?
        </Typography>

        <Typography
          variant="subtitle2"
          mt={2}
          sx={{ color: theme.typography.primary.subtitle }}
        >
          It appears dont currently have a garden setup, dont worry its a simple
          process to get started.
        </Typography>

        <Box
          component={"img"}
          src={emptyGreenhouse}
          alt="Empty Greenhouse"
          sx={{
            maxWidth: "500px",
            mt: 2,
            borderRadius: 5,
            ml: "auto",
            mr: "auto",
          }}
        />

        <PrimaryButton text="Click Here to Get Started" onClick={handleClick} />
      </Card>
    </Container>
  );
};

export default Gardens;
