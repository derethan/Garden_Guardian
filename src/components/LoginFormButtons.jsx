import { Button, CardActions, Grid } from "@mui/material";

import DontHaveAccount from "./account/DontHaveAccountLink";
import ForgotPasswordLink from "./account/ForgotPasswordLink";

const LoginFormButtons = () => {
    return (
        <CardActions
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: 4,
          gap: 4,
        }}
      >
        <Button type="submit" fullWidth variant="contained" color="secondary">
          Login
        </Button>

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