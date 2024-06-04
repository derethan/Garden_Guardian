import { Box, Button } from "@mui/material";

const StepNavButtons = ({
  activeStep,
  steps,
  handleBack,
  handleClose,
  handleNext,
  handleSkip,
  handleAddPlant,
  isStepOptional,
  newVarietyValue,
  enableAddPlantButton,
  selectedPlant,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Button
        onClick={activeStep === 0 || activeStep === 1 && selectedPlant.id != null ? handleClose : handleBack}
        sx={{ mr: 1 }}
      >
        {activeStep === 0 || activeStep === 1 && selectedPlant.id != null ? "Cancel" : "Back"}
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      {isStepOptional(activeStep) && (
        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
          Skip
        </Button>
      )}

      <Button
        onClick={() => {
          activeStep === steps.length - 1 ? handleAddPlant() : handleNext();
        }}
        disabled={
          (activeStep === 1 && !newVarietyValue) ||
          (activeStep === steps.length - 1 && !enableAddPlantButton)
        }
      >
        {activeStep === steps.length - 1 ? "Add Plant" : "Next"}
      </Button>
    </Box>
  );
};

export default StepNavButtons;
