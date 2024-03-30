// Desc: Gardens view
// Importing React
import { useState } from "react";

// Material-UI
import { Container } from "@mui/material";

// Components
import GettingStarted from "../components/gardens/GettingStarted";
import HeroBanner from "../components/gardens/HeroBanner";
//-----------------------------------------------------------
import GardenWrapper from "../components/gardens/GardenWrapper";
import { AddPlant, AddGarden, AddGardrenGroup } from "../imports"; 

const Gardens = () => {
  const [ShowAddGardenModal, setShowAddGardenModal] = useState(false);
  const [ShowAddGardenGroupModal, setShowAddGardenGroupModal] = useState(false);
  const [ShowAddPlantModal, setShowAddPlantModal] = useState(true);


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

      {/* Add Plant Modal */}
      {ShowAddPlantModal && (
        <AddPlant
          show={ShowAddPlantModal}
          handleClose={setShowAddPlantModal}
          setGardenPlants={setGardenPlants}
        />
      )}

    </Container>
  );
};

export default Gardens;
