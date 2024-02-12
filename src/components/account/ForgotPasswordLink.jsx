import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPasswordLink = () => {
  return (
    <Link to="/passwordReset">
      <Typography
        variant="body2"
        color="text.primary"
        sx={{
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        Forgot password?
      </Typography>
    </Link>
  );
};

export default ForgotPasswordLink;