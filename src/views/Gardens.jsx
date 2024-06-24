// Desc: Gardens view
// Importing React
import { useState, useEffect } from "react";

// Material-UI
import { Container } from "@mui/material";

// Components
import GettingStarted from "../components/gardens/GettingStarted";
import HeroBanner from "../components/gardens/HeroBanner";
import GardenWrapper from "../components/gardens/GardenWrapper";

//Hooks
import { AddGarden, AddGardrenGroup } from "../imports";

// UseAuth
import { useAuth } from "../contextProviders";

// Garden Functions
import { useGardenFunctions } from "../components/gardens/utils/useGardenFunctions";

const Gardens = () => {
  const { user, token } = useAuth();
  const { getGardens } = useGardenFunctions();

  const [ShowAddGardenModal, setShowAddGardenModal] = useState(false);
  const [ShowAddGardenGroupModal, setShowAddGardenGroupModal] = useState(false);

  const [gardens, setGardens] = useState(null);
  const [gardenGroups, setGardenGroups] = useState(null);

  const [gardenPlants, setGardenPlants] = useState(() => {
    const allPlants = JSON.parse(localStorage.getItem("gardenPlants")) || [];
    return allPlants.filter((plant) => plant.userID === user.id);
  });

  // State to hold the result message for adding new Gardens/Groups/Plants
  const [resultMessage, setResultMessage] = useState("");

  // Fetch the garden data from the API
  useEffect(() => {


    // const fetchGardenGroups = async () => {
    //   try {
    //     const response = await fetch(URL + `users/${user.id}/gardens/groups`, {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });

    //     const data = await response.json();

    //     if (response.status) {
    //       setGardenGroups(data.gardenGroups);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching garden groups", error);
    //   }
    // };

    getGardens().then((gardenData) => {
      setGardens(gardenData);
    });

  }, [user.id, token]);

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
        setResultMessage={setResultMessage}
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
