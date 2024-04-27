import { Box, Typography, useTheme } from "@mui/material";

const DashboardHeader = ({ name }) => {
  const theme = useTheme();

  return (
    <Box
      name="Header"
      sx={{
        backgroundColor: "background.lightGrey",
        padding: 4,
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
        Welcome back, {name}!{" "}
      </Typography>

        {/* TODO: Get the last Login Date for the User */}
      <Typography
        variant="subtitle2"
        mt={1}
        sx={{
          color: theme.typography.primary.subtitle,
        }}
      >
        Here is a quick overview of your activity since your last login.
      </Typography>
    </Box>
  );
};

export default DashboardHeader;
