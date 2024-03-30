import { DefaultModal } from "../../imports";
import { DialogContentText, Autocomplete, TextField, Box } from "@mui/material";

export const AddPlant = ({ show, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <DefaultModal
      displayModal={show}
      setDisplayModal={handleClose}
      modalTitle="Add a Plant to your Garden"
      cancel={true}
      handleSubmit={handleSubmit}
    >
      <DialogContentText sx={{ pb: 2 }}>
        Search for the name of the plant you would like to add to your garden.
        <br />
        Example: Tomato, Carrot, Rosemary, etc.
      </DialogContentText>

      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        pt: 2,
      }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select a Plant" />
          )}
        />
      </Box>
    </DefaultModal>
  );
};

const options = [
  { label: "Blueberry", id: 1 },
  { label: "Corn", id: 2 },
];
