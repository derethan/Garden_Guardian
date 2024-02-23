import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";


const ForgotPasswordLink = () => {
  const theme = useTheme();

  return (
    <Link to="/passwordReset">
      <Typography
        variant="body2"
        color={theme.typography.primary.textDark}
        sx={{
          "&:hover": {
            color: theme.typography.primary.main,
          },
        }}
      >
        Forgot password?
      </Typography>
    </Link>
  );
};

export default ForgotPasswordLink;