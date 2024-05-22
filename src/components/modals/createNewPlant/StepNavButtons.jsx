import { Box, Button } from "@mui/material";

const StepNavButtons = ({
  activeStep,
  steps,
  handleBack,
  handleClose,
  handleNext,
  handleSkip,
  isStepOptional,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Button
        onClick={activeStep === 0 ? handleClose : handleBack}
        sx={{ mr: 1 }}
      >
        {activeStep === 0 ? "Cancel" : "Back"}
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      {isStepOptional(activeStep) && (
        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
          Skip
        </Button>
      )}

      <Button
        onClick={() => {
          handleNext();
        }}
      >
        {activeStep === steps.length - 1 ? "Create Plant" : "Next"}
      </Button>
    </Box>
  );
};

export default StepNavButtons;
