import { useAuth } from "../../../hooks/useAuthProvider";

export const useGardenFunctions = () => {
  const URL = import.meta.env.VITE_API_URL;

  const { user } = useAuth();

  /************************************************************
   *  Functions to Related to Gardens, Groups and Plants
   * ***********************************************************/

  // Function to Create/Add a New Garden to the Local Storage and Garden State
  const createGarden = (formData, setGardens) => {
    //Get the current gardens from local storage
    const gardens = JSON.parse(localStorage.getItem("gardens")) || [];

    //Add the userID to the formData
    const newFormData = { ...formData, userID: user.id };

    //Add the new garden to the gardens array
    gardens.push(newFormData);

    //Save the new gardens array to local storage
    localStorage.setItem("gardens", JSON.stringify(gardens));

    //Filter the gardens to only show the current user's gardens to update the state
    const userGardens = gardens.filter((garden) => garden.userID === user.id);

    //Update the state of the gardens
    setGardens(userGardens);
  };
  // Function to Delete a Garden from the Local Storage and Garden State
  const deleteGarden = (
    gardenID,
    setGardens,
    setGardenGroups,
    setGardenPlants
  ) => {
    //Get the current gardens from local storage
    const gardens = JSON.parse(localStorage.getItem("gardens")) || [];

    //Remove the garden from the gardens array
    const newGardens = gardens.filter((garden) => garden.gardenID !== gardenID);

    //Save the new gardens array to local storage
    if (newGardens.length === 0) {
      localStorage.removeItem("gardens");
      setGardens(null);
    } else {
      localStorage.setItem("gardens", JSON.stringify(newGardens));

      //Update the state of the gardens to math the users Gardens
      const userGardens = newGardens.filter(
        (garden) => garden.userID === user.id
      );
      setGardens(userGardens.length > 0 ? userGardens : null);
    }

    //Remove all groups in the garden
    const gardenGroups = JSON.parse(localStorage.getItem("gardenGroups")) || [];

    //For each Group that matches the Garden ID, Run the deleteGardenGroup function
    gardenGroups.forEach((group) => {
      if (group.gardenID === gardenID) {
        deleteGardenGroup(group.groupID, setGardenGroups, setGardenPlants);
      }
    });
  };
  // Function to Create/Add a New Garden Group to the Local Storage and Garden Group State
  const createGardenGroup = (formData, setGardenGroups) => {
    //Get the current garden groups from local storage
    const gardenGroups = JSON.parse(localStorage.getItem("gardenGroups")) || [];

    //Add the userID to the formData
    const newFormData = { ...formData, userID: user.id };

    //Add the new garden group to the garden groups array
    gardenGroups.push(newFormData);

    //Save the new garden groups array to local storage
    localStorage.setItem("gardenGroups", JSON.stringify(gardenGroups));

    //Filter the garden groups to only show the current user's garden groups to update the state
    const userGroups = gardenGroups.filter((group) => group.userID === user.id);

    //Update the state of the garden groups
    setGardenGroups(userGroups);
  };
  // Function to Delete a Garden Group from the Local Storage and Garden Group State
  const deleteGardenGroup = (groupID, setGardenGroups, setGardenPlants) => {
    //Get the current garden groups from local storage
    const gardenGroups = JSON.parse(localStorage.getItem("gardenGroups")) || [];

    //Remove the garden group from the garden groups array
    const newGardenGroups = gardenGroups.filter(
      (group) => group.groupID !== groupID
    );

    //Save the new garden groups array to local storage
    if (newGardenGroups.length === 0) {
      localStorage.removeItem("gardenGroups");
      setGardenGroups(null);
    } else {
      localStorage.setItem("gardenGroups", JSON.stringify(newGardenGroups));

      //Update the state of the garden groups to match the user
      const userGroups = newGardenGroups.filter(
        (group) => group.userID === user.id
      );
      setGardenGroups(userGroups);
    }

    //Remove all plants associated with the groupID
    deleteGardenPlant(null, setGardenPlants, groupID);
  };
  // Function to Create/Add a New Garden Plant to the Local Storage and Garden Plant State
  const createGardenPlant = (formData, setGardenPlants) => {
    //Get the current garden plants from local storage
    const gardenPlants = JSON.parse(localStorage.getItem("gardenPlants")) || [];

    //Generate a unique ID for the new garden plant
    const plantID = Math.random().toString(36).substring(2, 9);

    const newFormData = {
      ...formData,
      plantID: `plant-` + plantID,
      userID: user.id,
    };

    //Add the new garden plant to the garden plants array
    gardenPlants.push(newFormData);

    //Save the new garden plants array to local storage
    localStorage.setItem("gardenPlants", JSON.stringify(gardenPlants));

    //Filter the garden plants to only show the current user's garden plants to update the state
    const userPlant = gardenPlants.filter((plant) => plant.userID === user.id);

    //Update the state of the garden plants
    setGardenPlants(userPlant);
  };
  const deleteGardenPlant = (
    plantID = null,
    setGardenPlants,
    groupID = null
  ) => {
    //Get the current garden plants from local storage
    const gardenPlants = JSON.parse(localStorage.getItem("gardenPlants")) || [];

    //Remove the garden plant from the garden plants array
    const newGardenPlants = gardenPlants.filter((plant) =>
      plantID ? plant.plantID !== plantID : plant.groupID !== groupID
    );

    //Save the new garden plants array to local storage
    if (newGardenPlants.length === 0) {
      localStorage.removeItem("gardenPlants");
      setGardenPlants(null);
    } else {
      localStorage.setItem("gardenPlants", JSON.stringify(newGardenPlants));

      //Update the state of the garden plants to match the user
      const userPlants = newGardenPlants.filter(
        (plant) => plant.userID === user.id
      );
      setGardenPlants(userPlants);
    }
  };

  const addPlantAttributes = (formData, property, plantData) => {
    //Get the current garden plants from local storage
    const gardenPlants = JSON.parse(localStorage.getItem("gardenPlants")) || [];

    //Find the plant in the garden plants array
    const currentPlant =
      gardenPlants[
        gardenPlants.findIndex((plant) => plant.plantID === plantData.plantID)
      ];

    //Update the plant with the new property
    const updatedPlant = { ...currentPlant, [property]: formData };

    //Update the garden plants array with the updated plant
    gardenPlants[
      gardenPlants.findIndex((plant) => plant.plantID === plantData.plantID)
    ] = updatedPlant;

    //Save the new garden plants array to local storage
    localStorage.setItem("gardenPlants", JSON.stringify(gardenPlants));

  };
  /************************************************************
   *  Functions to Fetch Data Plant from the API
   * ***********************************************************/

  // Function to Fetch the List of All Plants from the API
  const getAllPlants = async () => {
    try {
      const response = await fetch(URL + `api/plants/all`);
      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to Fetch the List of Edible Plants from the API
  const getEdiblePlantData = async () => {
    let data = [];
    const getAllPages = async (url, data = []) => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        const newData = [...data, ...result.data];

        if (result.links.next) {
          let pageLink = result.links.next;

          // Remove the base URL from the link
          pageLink = pageLink.replace("/api/v1/plants", "");

          return getAllPages(URL + `api/plants/edible` + pageLink, newData);
        } else {
          console.log("All pages fetched");
          return newData;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Fetch the list of Edible plants from the API
    if (!localStorage.getItem("veggieList")) {
      const veggieData = await getAllPages(URL + `api/plants/edible`);
      data = [...data, ...veggieData];
      localStorage.setItem("veggieList", JSON.stringify(veggieData));
    } else {
      const veggieData = JSON.parse(localStorage.getItem("veggieList"));
      data = [...data, ...veggieData];
    }

    return data;
  };

  return {
    createGarden,
    createGardenGroup,
    createGardenPlant,
    deleteGarden,
    deleteGardenGroup,
    deleteGardenPlant,
    addPlantAttributes,
    getAllPlants,
    getEdiblePlantData,
  };
};
