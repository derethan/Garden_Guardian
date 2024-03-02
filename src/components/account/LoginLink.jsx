import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const LoginLink = () => {
  const theme = useTheme();

  return (
    <Link to="/login">
      <Typography
        variant="body2"
        color={theme.typography.primary.textDark}
        sx={{
          "&:hover": {
            color: theme.typography.primary.main,
          },
        }}
      >
        Already have an account?<br /> Log In
      </Typography>
    </Link>
  );
};

export default LoginLink;
