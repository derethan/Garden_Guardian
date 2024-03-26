import { Container } from "@mui/material";
import GettingStarted from "../components/gardens/GettingStarted";
import HeroBanner from "../components/gardens/HeroBanner";

import { useState } from "react";
import AddGarden from "../components/modals/AddGarden";

const Gardens = () => {
  const [ShowAddGardenModal, setShowAddGardenModal] = useState(false);

  return (
    <Container
      sx={{
        pt: 4,
        pb: 4,
      }}
    >
      <HeroBanner />

      {!ShowAddGardenModal && (
        <GettingStarted setDisplayModal={setShowAddGardenModal} />
      )}

      <AddGarden
        show={ShowAddGardenModal}
        handleClose={setShowAddGardenModal}
      />
      
    </Container>
  );
};

export default Gardens;
