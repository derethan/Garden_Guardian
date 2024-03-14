import { Card, Typography } from "@mui/material";

const Alerts = () => {


    return (
        <>
        <Typography
          variant="h6"
          color="text.primary"
          fontWeight="bold"
          sx={{ paddingTop: "1rem" }}
        >
          Alerts
        </Typography>
  
        <Card
          variant="light"
          sx={{ padding: "1rem", borderRadius: "15px" }}
        ></Card>
      </>
    );
    };

export default Alerts;