// Desc: Gardens view
// Importing React
import { useState } from "react";

// Material-UI
import { Container } from "@mui/material";

// Components
import GettingStarted from "../components/gardens/GettingStarted";
import HeroBanner from "../components/gardens/HeroBanner";
import GardenWrapper from "../components/gardens/GardenWrapper";

//Hooks
import { AddGarden, AddGardrenGroup } from "../imports";

// UseAuth
import { useAuth } from "../hooks/useAuthProvider";


const Gardens = () => {
  const [ShowAddGardenModal, setShowAddGardenModal] = useState(false);
  const [ShowAddGardenGroupModal, setShowAddGardenGroupModal] = useState(false);

  const { user } = useAuth();

  const [gardens, setGardens] = useState( () =>
    {
      const allGardens = JSON.parse(localStorage.getItem("gardens"));
      const userGardens = allGardens.filter(garden => garden.userID === user.id);
      return userGardens.length > 0 ? userGardens : null;
    }
  );

  const [gardenGroups, setGardenGroups] = useState(() => {
    const allGroups = JSON.parse(localStorage.getItem("gardenGroups")) || [];
    return allGroups.filter(group => group.userID === user.id)
  });
    

  const [gardenPlants, setGardenPlants] = useState(() => {
    const allPlants = JSON.parse(localStorage.getItem("gardenPlants")) || [];
    return allPlants.filter(plant => plant.userID === user.id)
  }
  );

  useState(() => {
    console.log("gardens", gardens);
  }, [gardens]);

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
          setGardens={setGardens}
          setGardenPlants={setGardenPlants}
          setGardenGroups={setGardenGroups}
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
