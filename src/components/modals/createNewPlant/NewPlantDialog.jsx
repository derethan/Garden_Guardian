import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";

import Step1 from "./NewPlantName";
import Step2 from "./NewVarietyName";
import Step3 from "./PlantDetails";
import StepNavButtons from "./StepNavButtons";

import { useGardenFunctions } from "../../gardens/utils/useGardenFunctions";

const steps = ["Select a Name", "Select a Variety", "Add your New Plant"];

const NewPlantDialog = ({ open, toggleOpen, selectedPlant, setUpdateListOptions }) => {
  const { addNewPlant } = useGardenFunctions();

  const [activeStep, setActiveStep] = useState(selectedPlant.id ? 1 : 0);
  const [skipped, setSkipped] = useState(new Set());
  const [enableAddPlantButton, setEnableAddPlantButton] = useState(false);

  const [newPlantValue, setNewPlantValue] = useState("");
  const [newVarietyValue, setNewVarietyValue] = useState("");
  const [plantProps, setPlantProps] = useState([
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
  ]);
  const [formErrors, setFormErrors] = useState({
    plant: "",
    variety: "",
  });

  // useEffect(() => {
  //   console.log('Selected Plant: ', selectedPlant);
  // }, [selectedPlant]);

  const handleClose = () => {
    toggleOpen(false);
    setUpdateListOptions(false);
  };

  // Handle Adding the plant to the Database - util/useGardenFunctions for this
  const handleAddPlant = async () => {
    //Combine the plant name and variety and properties
    const newPlant = {
      plant: newPlantValue,
      variety: newVarietyValue,
      properties: plantProps,
    };

    //Add the new plant to the database
    const addPlant = await addNewPlant(newPlant);

    if (addPlant.error) {
      setFormErrors({
        error: addPlant.error,
      });

      setEnableAddPlantButton(false);
      return;
    }

    //If the plant was added successfully, move to the next step
    if (addPlant.status === 200) {
      setUpdateListOptions(true);
      handleNext();
    }
  };

  // Handle the Back button
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setEnableAddPlantButton(false);

    //Reset the form errors
    setFormErrors({
      plant: "",
      variety: "",
    });

    //Reset the plant properties
    plantProps.forEach((prop) => {
      setPlantProps((prevProps) => {
        return prevProps.map((item) => {
          if (item.title === prop.title) {
            return { ...item, value: "" };
          }
          return item;
        });
      });
    });
  };

  // Handle the Next button
  const handleNext = () => {
    //Before moving to the next step, check if the fields for that step are filled (if required)
    if (activeStep === 0 && !newPlantValue) {
      setFormErrors({
        plant: "Plant name is required",
      });
      return;
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  // Determine if a step is optional
  const isStepOptional = (step) => {
    // If new plant is being added, the variety step (1) is optional
    if (!selectedPlant.id) {
      return step === 1;
    }
  };

  // Handle the Skip button
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
    setNewVarietyValue("");
  };

  // Check if the Step is Skipped
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a new Plant</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {"Let's get started by adding a new plant."}
        </DialogContentText>

        {/* MUI Stepper Component */}
        <Box sx={{ width: "100%", pt: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              // If the step is skipped, set the status to error
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }

              // If the step is optional, add the optional text
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">(optional)</Typography>
                );
              }

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <>
              {/* Step 4 - Success Message */}
              <Typography sx={{ mt:2, p:2 }}>
                {!newVarietyValue
                  ? `${newPlantValue} has been added successfully!`
                  : `A new variety of ${newPlantValue},  ${newVarietyValue} has been added successfully!`}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button onClick={handleClose}>Close</Button>
              </Box>
            </>
          ) : (
            <>
              {/* Step Content */}

              {/* Step 1 - Plant name */}
              {activeStep === 0 && (
                <Step1
                  newPlantValue={newPlantValue}
                  setNewPlantValue={setNewPlantValue}
                  formErrors={formErrors}
                  setFormErrors={setFormErrors}
                />
              )}

              {/* Step 2 - Variety */}
              {activeStep === 1 && (
                <Step2
                  newPlantValue={newPlantValue}
                  newVarietyValue={newVarietyValue}
                  setNewVarietyValue={setNewVarietyValue}
                  formErrors={formErrors}
                />
              )}

              {/* Step 3 - Generate Details */}
              {activeStep === 2 &&
                (formErrors.error ? (
                  <Typography p={2} mt={2} color={"error"}>
                    {formErrors.error}
                  </Typography>
                ) : (
                  <Step3
                    plant={newPlantValue}
                    variety={newVarietyValue}
                    plantProps={plantProps}
                    setPlantProps={setPlantProps}
                    setEnableAddPlantButton={setEnableAddPlantButton}
                  />
                ))}

              {/* Step Navigation Buttons */}
              <StepNavButtons
                activeStep={activeStep}
                steps={steps}
                handleClose={handleClose}
                handleBack={handleBack}
                handleNext={handleNext}
                handleSkip={handleSkip}
                handleAddPlant={handleAddPlant}
                isStepOptional={isStepOptional}
                newVarietyValue={newVarietyValue}
                enableAddPlantButton={enableAddPlantButton}
                selectedPlant={selectedPlant}
              />
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default NewPlantDialog;
