import { CardActions, Grid } from "@mui/material";

//import PrimaryButton
import {PrimaryButton} from "../PrimaryButton";


import DontHaveAccount from "./DontHaveAccountLink";
import ForgotPasswordLink from "./ForgotPasswordLink";

const LoginFormButtons = () => {
    return (
        <CardActions
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <PrimaryButton type="submit" text="Login" fullWidth />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ForgotPasswordLink />
          </Grid>
          <Grid item xs={6}>
            <DontHaveAccount />
          </Grid>
        </Grid>
      </CardActions>
    )
}

export default LoginFormButtons