//Import State
import { useState, useEffect, Fragment } from "react";
import { DefaultModal } from "../modals/DefaultModal";
import { useGardenFunctions } from "../gardens/utils/useGardenFunctions";
import { useValidate } from "../../hooks/useValidate";
import { PlantInfoContainer } from "../gardens/PlantInfoContainer";

import {
  DialogContentText,
  Autocomplete,
  TextField,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";

export const AddPlant = ({ show, handleClose, groupData, setGardenPlants }) => {
  const { getFruitData, getEdiblePlantData, createGardenPlant } =
    useGardenFunctions();

  // Form State
  const [formData, setFormData] = useState({
    label: "",
    id: null,
    name: "",
    groupID: groupData.groupID,
  });

  const [listOptions, setListOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [allPlants, setAllPlants] = useState([]); //List of all plants in the database
  const [showPlantInfo, setShowPlantInfo] = useState(false); //Show the plant info Component
  const [plantInfo, setPlantInfo] = useState(null);

  // Form Validation Hook
  const [formErrors, validateForm] = useValidate(formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    //Validate Form Data
    const isValid = validateForm();

    if (isValid) {

      let newPlantData = {
        ...formData,
        ...plantInfo,
      };
      //Add the plant to the garden
      console.log("Add Plant to Garden", newPlantData);

      //Create the new plant object
      createGardenPlant(newPlantData, setGardenPlants);

      //reset the form
      setFormData({
        label: "",
        id: null,
        name: "",
        groupID: groupData.groupID,
      });

      //Close the modal
      handleClose();
    }
  };

  //Get the list of plant names
  useEffect(() => {
    const getData = async () => {
      let data = [];
      setLoading(true);

      const fruitData = await getFruitData(); //useGardenFunctions
      data = [...data, ...fruitData];

      const ediblePlantData = await getEdiblePlantData(); //useGardenFunctions
      data = [...data, ...ediblePlantData];

      // Create a list of unique plant names
      const options = data.reduce((unique, item) => {
        let name = item.name || item.common_name || item.scientific_name;
        const id = item.id;

        // Check if this item is already in the unique array
        if (!unique.find((obj) => obj.label === name)) {
          unique.push({ label: name, id: id });
        }

        return unique;
      }, []);

      //Set the state with the list of unique plant names
      setListOptions(options);
      setAllPlants(data);
      setLoading(false);
    };

    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  useEffect(() => {
    if (formData.id && allPlants.length > 0) {
      // Get the Plant info from plantData based off the selectedPlant plantID
      const plant = allPlants.find((plant) => plant.id === formData.id);
      setPlantInfo(plant);
    }
  }, [formData]);

  return (
    <DefaultModal
      displayModal={show}
      setDisplayModal={handleClose}
      modalTitle="Add a Plant to your Garden"
      cancel={true}
      handleSubmit={handleSubmit}
    >
      <DialogContentText variant="subtitle2" sx={{ pb: 1 }}>
        Search for the name of the plant you would like to add to your garden.
      </DialogContentText>
      <Typography variant="subtitle2" sx={{ pb: 2 }}>
        Example: Tomato, Carrot, Rosemary, etc.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pt: 2,
        }}
      >
        <Autocomplete
          disablePortal
          id="plant-selection-list"
          options={listOptions}
          loading={loading}
          sx={{
            width: 300,
          }}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select a Plant"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <Fragment>
                    {loading && open ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </Fragment>
                ),
              }}
              error={formErrors.label ? true : false}
              helperText={formErrors.label}
            />
          )}
          value={formData.label} //this is the value that is selected from the dropdown - Returned as an object
          onChange={(event, newValue) => {
            //If the newValue is null, set the value to an empty object
            if (!newValue) {
              newValue = {
                label: "",
                id: null,
                name: "",
              };
            }
            //Set the value to the selected plant
            setFormData({
              ...formData,
              label: newValue.label,
              id: newValue.id,
              name: newValue.label,
            });
            if (newValue.id) {
              setShowPlantInfo(true);
            } else {
              setShowPlantInfo(false);
            }
          }}
          // inputValue={formData.name} //this is the value that is being typed in the input field - Returned as a string
          onInputChange={(event, newInputValue) => {
            setFormData({
              ...formData,
              name: newInputValue,
            });
            setShowPlantInfo(false);
          }}
        />
      </Box>

      {showPlantInfo && (
        <PlantInfoContainer selectedPlant={plantInfo} />
      )}
    </DefaultModal>
  );
};

//selectedPlant={formData} plantData={allPlants}