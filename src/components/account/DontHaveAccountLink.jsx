import {Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const DontHaveAccount = () => {

  const theme = useTheme();

  return (
    <Link to="/register">
      <Typography
        variant="body2"
        color={theme.typography.primary.textDark}
        sx={{
          "&:hover": {
            color: theme.typography.primary.main,
          },
        }}
      >
        Don&apos;t have an account? <br /> Sign up
      </Typography>
    </Link>
  );
};

export default DontHaveAccount;
