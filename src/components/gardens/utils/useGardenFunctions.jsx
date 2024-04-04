export const useGardenFunctions = () => {
  const URL = import.meta.env.VITE_API_URL;

  // Function to Create/Add a New Garden to the Local Storage and Garden State
  const createGarden = (formData, setGardens) => {
    //Get the current gardens from local storage
    const gardens = JSON.parse(localStorage.getItem("gardens")) || [];

    //Add the new garden to the gardens array
    gardens.push(formData);

    //Save the new gardens array to local storage
    localStorage.setItem("gardens", JSON.stringify(gardens));

    //Update the state of the gardens
    setGardens(gardens);
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
      setGardens(newGardens);
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

    //Add the new garden group to the garden groups array
    gardenGroups.push(formData);

    //Save the new garden groups array to local storage
    localStorage.setItem("gardenGroups", JSON.stringify(gardenGroups));

    //Update the state of the garden groups
    setGardenGroups(gardenGroups);
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
      setGardenGroups(newGardenGroups);
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

    const newFormData = { ...formData, plantID: `plant-` + plantID };

    //Add the new garden plant to the garden plants array
    gardenPlants.push(newFormData);

    //Save the new garden plants array to local storage
    localStorage.setItem("gardenPlants", JSON.stringify(gardenPlants));

    //Update the state of the garden plants
    setGardenPlants(gardenPlants);
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
      setGardenPlants(newGardenPlants);
    }
  };
  // Function to Fetch the List of Fruits from the API
  const getFruitData = async () => {
    let data = [];
    // Fetch the list of fruits from the API
    if (!localStorage.getItem("fruitList")) {
      const response = await fetch(URL + `api/fruit/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      data = await response.json();
      localStorage.setItem("fruitList", JSON.stringify(data));
    } else {
      data = JSON.parse(localStorage.getItem("fruitList"));
    }

    return data;
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
    getFruitData,
    getEdiblePlantData,
  };
};
