import { Box, TextField } from "@mui/material";

const Step1 = ({ newPlantValue, setNewPlantValue }) => {

    return (
        <Box p={2}>
        <TextField
          id="plant-name"
          label="Plant Name"
          variant="outlined"
          fullWidth
          value={newPlantValue}
          onChange={(e) => setNewPlantValue(e.target.value)}
        />
      </Box>
    );
}

export default Step1;