// Desc: Gardens view
// Importing React
import { useEffect, useState } from "react";

// Material-UI
import { Container } from "@mui/material";

// Components
import GettingStarted from "../components/gardens/GettingStarted";
import HeroBanner from "../components/gardens/HeroBanner";
//-----------------------------------------------------------
import GardenWrapper from "../components/gardens/GardenWrapper";
import { AddGarden, AddGardrenGroup } from "../imports";

const Gardens = () => {
  const [ShowAddGardenModal, setShowAddGardenModal] = useState(false);
  const [ShowAddGardenGroupModal, setShowAddGardenGroupModal] = useState(false);

  const [gardens, setGardens] = useState(
    JSON.parse(localStorage.getItem("gardens")) || null
  );

  const [gardenGroups, setGardenGroups] = useState(
    JSON.parse(localStorage.getItem("gardenGroups")) || null
  );

  const [gardenPlants, setGardenPlants] = useState(
    JSON.parse(localStorage.getItem("gardenPlants")) || null
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
          gardenPlants={gardenPlants}
          handleAddGarden={setShowAddGardenModal}
          handleAddGroup={setShowAddGardenGroupModal}
          setGardenPlants={setGardenPlants}
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
