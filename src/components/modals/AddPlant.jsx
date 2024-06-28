/* eslint-disable react-hooks/exhaustive-deps */
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
  Button,
} from "@mui/material";

import NewPlantDialog from "./createNewPlant/NewPlantDialog";

const filter = createFilterOptions();

export const AddPlant = ({ show, handleClose, groupData }) => {
  const { getAllPlants, getVariety, createGardenPlant, getPlantData } =
    useGardenFunctions();

  // Form State
  const [formData, setFormData] = useState({
    label: "",
    variety: "",
    id: null,
    name: "",
  });

  // States for the Dropdown List's, The selected List Items and the Loading State
  const [listOptions, setListOptions] = useState([]);
  const [varietyOptions, setVarietyOptions] = useState([]);
  const [updateListOptions, setUpdateListOptions] = useState(false);

  const [selectedPlant, setSelectedPlant] = useState(null);
  const [selectedVariety, setSelectedVariety] = useState(null);

  // States for the Plant Info, Selected Plants and List of Available plants
  const [plantInfo, setPlantInfo] = useState(null); // Plant Info for the selected Plant/variety in the List
  const [plantDescription, setPlantDescription] = useState(null); // Plant Description for the selected Plant/variety

  // States for Loading and Displaying conditionally rendered components
  const [showPlantInfo, setShowPlantInfo] = useState(false); //Show the plant info Component
  const [openNewPlantDialog, toggleOpenNewPlantDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [loadingPlants, setLoadingPlants] = useState(false);
  const [loadingVarieties, setLoadingVarieties] = useState(false);

  // Form Validation Hook
  const [formErrors, validateForm] = useValidate(formData);

  // Handle Adding new plant to the garden
  const handleSubmit = (event) => {
    event.preventDefault();

    //Validate Form Data
    const isValid = validateForm();

    if (isValid) {

      let plantData = {
        plant_name: selectedPlant.label,
        plant_id: selectedPlant.id,
        variety_name: selectedVariety ? selectedVariety.label : null,
        variety_id: selectedVariety ? selectedVariety.id : null,
        Description: plantDescription,
        gardenData: groupData,
      };
      //Create the new plant object
      createGardenPlant(plantData);

      //Result message for dialog here

      //reset the form
      setFormData({
        label: "",
        id: null,
        name: "",
      });

      //Close the modal
      handleClose();
    }
  };

  //Get the list of plant names to display in the dropdown
  useEffect(() => {
    const getlistOfPlants = async () => {
      setLoadingPlants(true);

      const plantData = await getAllPlants(); //useGardenFunctions
      // Create a list of unique plant names
      const listOptions = plantData.reduce((unique, item) => {
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

      // Update the ListOptions State with a list of unique plant names and ID's
      setListOptions(listOptions);
    };

    getlistOfPlants().then(() => {
      setLoadingPlants(false);
    });
  }, [updateListOptions]);

  //Get the list of varieties to display in the dropdown
  useEffect(() => {
    const getVarieties = async () => {
      setLoadingVarieties(true);

      const varietyData = await getVariety(formData.label); //useGardenFunctions

      // Create a list of plant names for the Variety dropdown
      const varieties = varietyData.map((variety) => {
        return { label: variety.name, id: variety.id };
      });
      setVarietyOptions(varieties);
    };

    if (formData.id) {
      getVarieties().finally(() => {
        setLoadingVarieties(false);
      });
    }
  }, [selectedPlant]);

  //Get the Info For the currently Selected Plant or Variety (If Available and Selected) From the database
  useEffect(() => {
    if (selectedPlant) {
      getPlantData(selectedPlant, selectedVariety).then((data) => {
        setPlantInfo(data); // Store the Plant Object for the Selected Plant/Variety
      });
    }
  }, [selectedPlant, selectedVariety]);

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
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
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
          loading={loadingPlants}
          value={formData.label}
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
                    {loadingPlants && open ? (
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
            //Reset any previous plant info
            setSelectedVariety(null);
            setSelectedPlant(null);
            setPlantInfo(null);

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
              setSelectedPlant(newValue);
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
                setSelectedPlant(newValue);
                setShowPlantInfo(true);
              } else {
                setShowPlantInfo(false);
              }
            }
          }}
          onInputChange={(newInputValue) => {
            setFormData({
              ...formData,
              id: null,
              name: newInputValue,
            });
            setPlantInfo(null);
            setPlantInfo(null);
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

        {formData.id && varietyOptions.length > 0 ? (
          <Autocomplete
            sx={{
              width: 300,
            }}
            id="variety-selection-list"
            options={varietyOptions}
            isOptionEqualToValue={(option, value) => {
              if (value === "") {
                return true;
              } else {
                return option.label === value ? true : false;
              }
            }}
            loading={loadingVarieties}
            value={selectedVariety}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select a Variety"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <Fragment>
                      {loadingVarieties && open ? (
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
                setSelectedVariety("");
                return;
              }

              if (
                newValue.id === null &&
                newValue.label === "Add A New Variety"
              ) {
                //Reset the form data
                setFormData({
                  ...formData,
                  variety: "",
                });
                setSelectedVariety("");

                //Set the value to the selected plant
                toggleOpenNewPlantDialog(true);
              } else {
                //Set the value to the selected plant
                setFormData({
                  ...formData,
                  variety: newValue.label,
                });
                setSelectedVariety(newValue || "");

                // if (newValue.id) {
                //   setShowPlantInfo(true);
                // } else {
                //   setShowPlantInfo(false);
                // }
              }
            }}
            onInputChange={(event, newInputValue) => {
              setSelectedVariety(newInputValue ? newInputValue : "");
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              if (params.inputValue) {
                filtered.push({
                  label: `Add A New Variety`,
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
        ) : (
          formData.id &&
          varietyOptions && (
            <Box display={"flex"} flexDirection={"column"} gap={2} p={2}>
              <Typography variant="subtitle2">
                No Varieties have been added for this plant.
              </Typography>
              <Button
                variant="contained"
                onClick={() => toggleOpenNewPlantDialog(true)}
              >
                Click here to add a new variety
              </Button>
            </Box>
          )
        )}
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
          selectedPlant={selectedPlant}
          selectedVariety={selectedVariety}
          plantInfo={plantInfo}
          plantDescription={plantDescription}
          setPlantDescription={setPlantDescription}
          varieties={varietyOptions}
        />
      )}
    </DefaultModal>
  );
};
