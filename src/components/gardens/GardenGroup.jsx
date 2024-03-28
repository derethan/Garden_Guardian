import { Typography, Grid, Card } from "@mui/material";

const GardenGroup = ({ group }) => {
  return (
    <Card variant="'light" sx={{height: '400px', p: 2, mt: 2, border: '1px dotted' }}>
      <Typography
        variant="h6"
        fontWeight={"bold"}
        color={"primary"}
        sx={{ borderBottom: 1, borderColor: "divider"}}
      >
        {group.groupName}
      </Typography>
    </Card>
  );
};

export default GardenGroup;
