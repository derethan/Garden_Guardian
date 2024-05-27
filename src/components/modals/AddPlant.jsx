//Import State
import { useState, useEffect, Fragment } from "react";
import { DefaultModal } from "../modals/DefaultModal";
import { useGardenFunctions } from "../gardens/utils/useGardenFunctions";
import { useValidate } from "../../hooks/useValidate";
import { PlantInfoContainer } from "../gardens/PlantInfoContainer";

//Import MUI Components
import {
  DialogContentText,
  Autocomplete,
  createFilterOptions,
  TextField,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";

import NewPlantDialog from "./createNewPlant/NewPlantDialog";

const filter = createFilterOptions();

export const AddPlant = ({ show, handleClose, groupData, setGardenPlants }) => {
  const { getAllPlants, createGardenPlant } = useGardenFunctions();

  // Form State
  const [formData, setFormData] = useState({
    label: "",
    id: null,
    name: "",
    groupID: groupData.groupID,
  });

  const [listOptions, setListOptions] = useState([]);
  const [selectedListItem, setSelectedListItem] = useState(null);
  const [updateListOptions, setUpdateListOptions] = useState(false);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [allPlants, setAllPlants] = useState([]); //List of all plants in the database

  const [showPlantInfo, setShowPlantInfo] = useState(false); //Show the plant info Component
  const [plantInfo, setPlantInfo] = useState(null); // Plant Info for the selected Plant in the List
  const [plantDescription, setPlantDescription] = useState(null);

  const [openNewPlantDialog, toggleOpenNewPlantDialog] = useState(false);

  // Form Validation Hook
  const [formErrors, validateForm] = useValidate(formData);

  // Handle Adding new plant to the garden
  const handleSubmit = (event) => {
    event.preventDefault();

    //Validate Form Data
    const isValid = validateForm();

    if (isValid) {
      let newPlantData = {
        ...formData,
        ...plantInfo,
        description: plantDescription,
      };

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

  //Get the list of plant names to display in the dropdown
  useEffect(() => {
    const getData = async () => {
      let data = [];
      setLoading(true);

      const plantData = await getAllPlants(); //useGardenFunctions
      data = [...data, ...plantData];

      // Create a list of unique plant names
      const listOptions = data.reduce((unique, item) => {
        let name = item.name || item.common_name || item.scientific_name;
        const id = item.id;

        // Check if this item is already in the unique array
        if (!unique.find((obj) => obj.label === name)) {
          unique.push({ label: name, id: id });
        }

        return unique;
      }, []);

      // Sort options alphabetically based on the title property
      listOptions.sort((a, b) => a.label.localeCompare(b.label));

      //Set the state with the list of unique plant names
      setListOptions(listOptions);
      setAllPlants(data);
      setLoading(false);
    };

    getData();

  }, [updateListOptions]);

  // Get the Specific Plant Details for the user selected plant (Displays in the Plant Details section)
  useEffect(() => {
    if (formData.id && allPlants.length > 0) {
      const plant = allPlants.find((plant) => plant.id === formData.id);
      setPlantInfo(plant);
      console.log(plant);
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
          sx={{
            width: 300,
          }}
          disablePortal
          id="plant-selection-list"
          options={listOptions}
          // groupBy={(option) => option.label[0]}
          isOptionEqualToValue={(option, value) => {
            if (value === "") {
              return true;
            } else {
              return option.label === value ? true : false;
            }
          }}
          loading={loading}
          value={formData.label} //this is the value that is selected from the dropdown - Returned as an object
          // inputValue={formData.name} //this is the value that is being typed in the input field - Returned as a string

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
          onChange={(event, newValue) => {
            //If the newValue is null, set the value to an empty object
            if (!newValue) {
              newValue = {
                label: "",
                id: null,
                name: "",
              };
            }

            if (newValue.id === null && newValue.label === "Add A New Plant") {
              //Reset the form data
              setFormData({
                ...formData,
                label: "",
                id: null,
                name: "",
              });

              //Set the value to the selected plant
              setSelectedListItem(newValue);
              toggleOpenNewPlantDialog(true);
            } else {
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
            }
          }}
          onInputChange={(event, newInputValue) => {
            setFormData({
              ...formData,
              name: newInputValue,
            });
            setShowPlantInfo(false);
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            if (params.inputValue !== "") {
              filtered.push({
                label: `Add A New Plant`,
                id: null,
              });
            }
            return filtered;
          }}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            return option.label;
          }}
        />
      </Box>

      {openNewPlantDialog && (
        <NewPlantDialog
          open={openNewPlantDialog}
          toggleOpen={toggleOpenNewPlantDialog}
          selectedPlant={formData} // pass formData as selectedPlant prop
          setUpdateListOptions={setUpdateListOptions}
        />
      )}

      {showPlantInfo && (
        <PlantInfoContainer
          selectedPlant={plantInfo}
          plantDescription={plantDescription}
          setPlantDescription={setPlantDescription}
        />
      )}
    </DefaultModal>
  );
};
