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
import { useAuth } from "../hooks/useAuthProvider";

const URL = import.meta.env.VITE_API_URL;

const Gardens = () => {
  const [ShowAddGardenModal, setShowAddGardenModal] = useState(false);
  const [ShowAddGardenGroupModal, setShowAddGardenGroupModal] = useState(false);

  const { user, token } = useAuth();

  const [gardens, setGardens] = useState(null);
  const [resultMessage, setResultMessage] = useState("");

  const [gardenGroups, setGardenGroups] = useState(() => {
    const allGroups = JSON.parse(localStorage.getItem("gardenGroups")) || [];
    return allGroups.filter((group) => group.userID === user.id);
  });

  const [gardenPlants, setGardenPlants] = useState(() => {
    const allPlants = JSON.parse(localStorage.getItem("gardenPlants")) || [];
    return allPlants.filter((plant) => plant.userID === user.id);
  });

  // Fetch the garden data from the API
  useEffect(() => {
    //Function to fetch the gardens associated with the user
    const fetchGardens = async () => {
      try {
        const response = await fetch(URL + `users/${user.id}/gardens`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.status) {
          setGardens(data.gardenData);
        }
      } catch (error) {
        console.error("Error fetching gardens", error);
      }
    };

    const fetchGardenGroups = async () => {
      try {
        const response = await fetch(URL + `users/${user.id}/gardens/groups`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.status) {
          setGardenGroups(data.gardenGroups);
        }
      } catch (error) {
        console.error("Error fetching garden groups", error);
      }
    };

    fetchGardens();
    fetchGardenGroups();
  }, [user.id, token, resultMessage]);

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
        setResultMessage={setResultMessage}
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
