import { Box, Card, Typography, useTheme } from "@mui/material";

import emptyGreenhouse from "../../assets/emptyField.jpg";
import { PrimaryButton } from "../PrimaryButton";

const GettingStarted = ({ setDisplayModal }) => {
  const theme = useTheme();

  const handleClick = () => {
    setDisplayModal(true);
  };

  return (
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
          maxWidth: {sm: "100%", md: "500px"},
          mt: 2,
          borderRadius: 5,
          ml: "auto",
          mr: "auto",
        }}
      />

      <PrimaryButton text="Click Here to Get Started" onClick={handleClick} />
    </Card>
  );
};

export default GettingStarted;
