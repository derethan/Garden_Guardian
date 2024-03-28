import { Container } from "@mui/material";
import GettingStarted from "../components/gardens/GettingStarted";
import HeroBanner from "../components/gardens/HeroBanner";

import { useState } from "react";
import AddGarden from "../components/modals/AddGarden";
import GardenWrapper from "../components/gardens/GardenWrapper";
import AddGardrenGroup from "../components/modals/AddGardenGroup";

const Gardens = () => {
  const [ShowAddGardenModal, setShowAddGardenModal] = useState(false);
  const [ShowAddGardenGroupModal, setShowAddGardenGroupModal] = useState(false);

  const [gardens, setGardens] = useState(
    JSON.parse(localStorage.getItem("gardens")) || null
  );

  const [gardenGroups, setGardenGroups] = useState(
    JSON.parse(localStorage.getItem("gardenGroups")) || null
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
        <GardenWrapper
          gardenData={gardens}
          gardenGroups={gardenGroups}
          handleAddGarden={setShowAddGardenModal}
          handleAddGroup={setShowAddGardenGroupModal}
        />
      ) : (
        <GettingStarted setDisplayModal={setShowAddGardenModal} />
      )}

      {/* Add Garden Modal */}
      <AddGarden
        show={ShowAddGardenModal}
        handleClose={setShowAddGardenModal}
        setGardens={setGardens}
      />

      {/* Add Garden Group Modal */}
      {ShowAddGardenGroupModal && (
        <AddGardrenGroup
          show={ShowAddGardenGroupModal}
          handleClose={setShowAddGardenGroupModal}
          gardenData={gardens}
          setGardenGroups={setGardenGroups}
        />
      )}
    </Container>
  );
};

export default Gardens;
