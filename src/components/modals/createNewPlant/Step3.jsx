import { Box, TextField, Typography } from "@mui/material";
import { PrimaryButton } from "../../PrimaryButton";

const step3 = ({ plant, variety }) => {
  const plantProps = [
    {
      title: "Description",
      value: "",
    },
    {
      title: "Harvest Time",
      value: "",
    },
    {
      title: "How to Sow",
      value: "",
    },
    {
      title: "Spacing",
      value: "",
    },
    {
      title: "Grows Well With",
      value: "",
    },
    {
      title: "Avoid Planting With",
      value: "",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" color={"text.main"}>
          {plant}
        </Typography>
        <Typography
          variant="caption"
          color={"text.subtitle"}
          fontWeight={"bold"}
        >
          {variety}
        </Typography>
      </Box>

      {/* Button for Root to generate Info for the Plant */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pt: 2,
        }}
      >
        <PrimaryButton variant="contained" color="primary" size="large">
          Generate!
        </PrimaryButton>
      </Box>

      {/* 
         To handle the Generation of plant info:

        If the Variety is skipped/Null Generate info based on plant name only otherwise 
        Generate info based on plant name and variety

        Info to generate:
        Description
        Grows With
        Cannot Grow With
        Harvest Time
        How to Sow
        Spacing
        */}

      {plantProps.map((prop, index) => {
        return (
          <Box key={index} sx={{ mt: 2 }}>
            <TextField
              label={prop.title}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={prop.value}
              onChange={(e) => {
                plantProps[index].value = e.target.value;
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default step3;
