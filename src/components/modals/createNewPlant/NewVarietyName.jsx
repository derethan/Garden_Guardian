import { Box, TextField, Typography } from "@mui/material";

const NewVarietyName = ({
  newPlantValue,
  newVarietyValue,
  setNewVarietyValue,
  formErrors,
}) => {
  return (
    <Box p={2}>
      <Typography variant="subtitle2" color={"text.subtitle"} sx={{ mt: 4 }}>
        Enter the name of the variety of {newPlantValue} you would like to add.
      </Typography>
      <Typography variant="caption" fontWeight={"bold"} color={"text.subtitle"}>
        Example: Beefsteak, Cherry, Roma, etc.
      </Typography>

      <TextField
        sx={{ mt: 2 }}
        id="plant-variety"
        label={`${newPlantValue} Variety`}
        variant="outlined"
        fullWidth
        value={newVarietyValue}
        onChange={(e) => {
          let value = e.target.value;
          setNewVarietyValue(value.charAt(0).toUpperCase() + value.slice(1));
        }}
        error={formErrors.variety ? true : false}
        helperText={formErrors.variety}
      />
    </Box>
  );
};

export default NewVarietyName;
