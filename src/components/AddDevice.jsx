import { Modal } from "@mui/material";

const AddDevice = ({ display }) => {
  return (
    <Modal
      open={display}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" 
    }}
    >
      <h1>Modal</h1>
    </Modal>
  );
};

export default AddDevice;
