import { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import IconSeedling from "../../../assets/IconSeedling.png";

const PlantDetails = ({
  plant,
  variety,
  plantProps,
  setPlantProps,
  setEnableAddPlantButton,
}) => {
  const [manualMode, setManualMode] = useState(false); // Flag to indicate if the user is in manual mode
  const [displayForm, setDisplayForm] = useState(false); // Flag to indicate if the form should be displayed
  const [displayPlantProps, setDisplayPlantProps] = useState(false); // Flag to indicate if the plant properties should be displayed
  const [isLoading, setIsLoading] = useState(false); // Flag to indicate if the data is being loaded
  const [error, setError] = useState(null); // Error message to display

  const handleGenerate = async () => {
    setDisplayPlantProps(true);
    setManualMode(false);
    setError(null);

    // Query the API to get the plant information
    const generatedProperties = await getAIResults();

    if (!generatedProperties) {
      setError(
        "Root was unable to find any information on this plant, please check your plant name and variety and try again."
      );
      return;
    } else {
      // for each of the generated properties in the array, update the corresponding plantProp
      let newPlantProps = [...plantProps];

      newPlantProps.forEach((prop, index) => {
        newPlantProps[index].value = generatedProperties[prop.title];
      });

      setPlantProps(newPlantProps);
      setEnableAddPlantButton(true);
    }
  };

  const getAIResults = async () => {
    // Query the API to get the plant information
    const URL = import.meta.env.VITE_API_URL;

    try {
      setIsLoading(true);
      const response = await fetch(URL + "ai/generatePlantInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plantName: plant ? plant : null,
          variety: variety ? variety : null,
          properties: plantProps.map((prop) => {
            return { title: prop.title, description: prop.description };
          }),
        }),
      });

      if (response.status === 201) {
        return null;
      }

      const result = await response.json();

      return result;

      // Update the plantProps with the new information
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box pt={4} pb={4}>
      {/* Display the Plant Name and Variety */}
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
      {!displayPlantProps && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            pt: 2,
          }}
        >
          <Tooltip title="Click here to let Root! Get the Plant Info for you.">
            <Box>
              <IconButton
                color="primary"
                aria-label="Generate Plant Information"
                onClick={handleGenerate}
                sx={{ p: 2 }}
              >
                <img src={IconSeedling} alt="AI Icon" width={"50px"} />

                <Box pl={1}>
                  <Typography variant="caption" color={"text.main"} fontWeight={'bold'}>
                    Ask Root!
                  </Typography>
                </Box>
              </IconButton>
            </Box>
          </Tooltip>

          <Typography
            variant="caption"
            color={"text.subtitle"}
            fontWeight={"bold"}
            sx={{ mt: 3, mb: 4, cursor: "pointer", textAlign: "center"}}
            onClick={() => {
              setManualMode(!manualMode);
              setDisplayForm(!displayForm);
              setDisplayPlantProps(false);
              setEnableAddPlantButton(!manualMode);
            }}
          >
            {'or'} <br />
            (Enter the information manually)
          </Typography>
        </Box>
      )}

      <Divider sx={{ mt: 3 }} />

      {/* Display the generated Information */}
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 8,
          }}
        >
          <CircularProgress color="primary" size={40} />
        </Box>
      ) : error ? (
        <Typography
          variant="body1"
          color={"error"}
          sx={{ mt: 4, textAlign: "center" }}
        >
          {error}
        </Typography>
      ) : (
        !manualMode &&
        displayPlantProps &&
        plantProps.map((prop, index) => {
          return (
            <Box key={index} sx={{ mt: 4, textAlign: "center" }}>
              <Typography variant="h6" color={"text.main"}>
                {prop.title}
              </Typography>
              <Typography variant="body1" color={"text.subtitle"}>
                {prop.value}
              </Typography>
            </Box>
          );
        })
      )}

      {/* Display the form for user to manually add plant information */}
      {manualMode &&
        displayForm &&
        plantProps.map((prop, index) => {
          return (
            <Box key={index} sx={{ mt: 3 }}>
              <TextField
                label={prop.title}
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                value={prop.value}
                onChange={(e) => {
                  let value = e.target.value;
                  let newPlantProps = [...plantProps];
                  newPlantProps[index].value = value;
                  setPlantProps(newPlantProps);
                }}
              />
            </Box>
          );
        })}
    </Box>
  );
};

export default PlantDetails;
