import {Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DontHaveAccount = () => {
  return (
    <Link to="/register">
      <Typography
        variant="body2"
        color="text.primary"
        sx={{
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        Don&apos;t have an account? <br /> Sign up
      </Typography>
    </Link>
  );
};

export default DontHaveAccount;
