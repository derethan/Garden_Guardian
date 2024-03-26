import "./modals.css";

import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  Container,
} from "@mui/material";

import { PrimaryButton } from "../PrimaryButton";

const DefaultModal = ({
  displayModal,
  setDisplayModal,
  cancel,
  modalTitle,
  children,
  handleSubmit,
}) => {

  // If the display prop is false, Do not show Modal
  if (!displayModal) {
    return null;
  }
  return (
    <div className="modal-wrapper">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          variant="light"
          sx={{
            padding: 2,
            maxWidth: { md: "100%", lg: "100%" },
          }}
          component="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <DialogTitle>{modalTitle}</DialogTitle>

          <DialogContent>{children}</DialogContent>

          <DialogActions sx={{ justifyContent: "center" }}>
            {cancel && (
              <PrimaryButton
                text="Cancel"
                onClick={() => setDisplayModal(false)}
              />
            )}
            <PrimaryButton text="Submit" type="submit" />
          </DialogActions>
        </Card>
      </Container>
    </div>
  );
};

export default DefaultModal;
