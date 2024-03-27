import { Container } from "@mui/material";
import GettingStarted from "../components/gardens/GettingStarted";
import HeroBanner from "../components/gardens/HeroBanner";

import { useState } from "react";
import AddGarden from "../components/modals/AddGarden";
import GardenWrapper from "../components/gardens/GardenWrapper";

const Gardens = () => {
  const [ShowAddGardenModal, setShowAddGardenModal] = useState(false);
  const [gardens, setGardens] = useState(
    JSON.parse(localStorage.getItem("gardens")) || null
  );

  return (
    <Container
      sx={{
        pt: 4,
        pb: 4,
      }}
    >
      <HeroBanner />

      {gardens ? (
        <GardenWrapper gardenData={gardens} handleAddGarden={setShowAddGardenModal} />
      ) : (
        <GettingStarted setDisplayModal={setShowAddGardenModal} />
      )}

      {/* Add Garden Modal */}
      <AddGarden
        show={ShowAddGardenModal}
        handleClose={setShowAddGardenModal}
        setGardens={setGardens}
      />
    </Container>
  );
};

export default Gardens;
