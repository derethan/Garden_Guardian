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

export const AddPlant = ({ show, handleClose, groupData, setGardenPlants }) => {
  const { getAllPlants, getVariety, createGardenPlant } = useGardenFunctions();

  // Form State
  const [formData, setFormData] = useState({
    label: "",
    variety: "",
    id: null,
    name: "",
    groupID: groupData.groupID,
  });

  // States for the Dropdown List's, The selected List Items and the Loading State
  const [listOptions, setListOptions] = useState([]);
  const [varietyOptions, setVarietyOptions] = useState([]);
  const [updateListOptions, setUpdateListOptions] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [selectedVariety, setSelectedVariety] = useState(null);

  // States for the Plant Info, Selected Plants and List of Available plants
  const [allPlants, setAllPlants] = useState([]); //List of all plants in the database
  const [plantInfo, setPlantInfo] = useState(null); // Plant Info for the selected Plant in the List
  const [plantDescription, setPlantDescription] = useState(null);

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
      setLoadingPlants(true);

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
    };

    getData().then(() => {
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
        console.log("Variety Options:", varietyOptions);
      });
    }
  }, [formData.id]);

  // Get the Specific Plant Details for the user selected plant (Displays in the Plant Details section)

  // TODO: Might be better to move this to the PlantInfoContainer component, Could stop
  // multiple rendering of the component casuing wrong data to be displayed

  // Depreciating: This function will be remade to get plant info from Database
  //               based on the selected plant ID

  useEffect(() => {
    if (formData.id && allPlants.length > 0) {
      const plant = allPlants.find((plant) => plant.id === formData.id);
      setPlantInfo(plant);
    }
  }, [formData]);

  useEffect(() => {
    console.log("Plant Info:", plantInfo);
  }, [plantInfo]);

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
          value={formData.label} //this is the value that is selected from the dropdown - Returned as an object
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
            value={selectedVariety} //this is the value that is selected from the dropdown - Returned as an object
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
          selectedPlant={plantInfo}
          selectedVariety={selectedVariety}
          plantDescription={plantDescription}
          setPlantDescription={setPlantDescription}
        />
      )}
    </DefaultModal>
  );
};
