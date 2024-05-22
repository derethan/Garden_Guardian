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

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepNavButtons from "./StepNavButtons";

const steps = ["Select a Name", "Select a Variety", "Add your New Plant"];

const NewPlantDialog = ({ open, toggleOpen, selectedPlant }) => {
  const [activeStep, setActiveStep] = useState(selectedPlant.id ? 1 : 0);
  const [skipped, setSkipped] = useState(new Set());

  const [newPlantValue, setNewPlantValue] = useState("");
  const [newVarietyValue, setNewVarietyValue] = useState("");

  // useEffect(() => {
  //   console.log(formSelection);
  // }, [formSelection]);

  const handleClose = () => {
    toggleOpen(false);
  };

  const handleCreateNewPlant = (event) => {
    event.preventDefault();

    // //set the new plant data
    // setFormData({
    //   ...newPlantValue,
    // });

    handleClose();
  };

  // Handle reset of the stepper
  const handleReset = () => {
    setActiveStep(0);
    setSkipped(new Set());
  };

  // Handle the Back button
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
  };

  // Handle the Next button
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

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
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleCreateNewPlant}>Close</Button>
              </Box>
            </>
          ) : (
            <>
              {/* Step Content */}
              <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography>

              {/* Step 1 - Plant name */}
              {activeStep === 0 && (
                <Step1
                  newPlantValue={newPlantValue}
                  setNewPlantValue={setNewPlantValue}
                />
              )}

              {/* Step 2 - Variety */}
              {activeStep === 1 && (
                <Step2
                  newVarietyValue={newVarietyValue}
                  setNewVarietyValue={setNewVarietyValue}
                />
              )}

              {/* Step 3 - Generate Details */}
              {activeStep === 2 && <Step3 
                plant={newPlantValue}
                variety={newVarietyValue}
              />}

              {/* Step Navigation Buttons */}
              <StepNavButtons
                activeStep={activeStep}
                steps={steps}
                handleClose={handleClose}
                handleBack={handleBack}
                handleNext={handleNext}
                handleSkip={handleSkip}
                isStepOptional={isStepOptional}
              />
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default NewPlantDialog;
