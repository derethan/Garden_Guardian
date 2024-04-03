import { useState } from "react";

export const useGardenFunctions = () => {
  const URL = import.meta.env.VITE_API_URL;

  //Function to Create/Add a New Garden to the Local Storage and Garden State
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

  //Function to Create/Add a New Garden Group to the Local Storage and Garden Group State
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

  const deleteGardenGroup = (groupID, setGardenGroups) => {
    //Get the current garden groups from local storage
    const gardenGroups = JSON.parse(localStorage.getItem("gardenGroups")) || [];

    //Remove the garden group from the garden groups array
    const newGardenGroups = gardenGroups.filter(
      (group) => group.groupID !== groupID
    );

    //Save the new garden groups array to local storage
    localStorage.setItem("gardenGroups", JSON.stringify(newGardenGroups));

    //Update the state of the garden groups
    setGardenGroups(newGardenGroups);
  };

  const createGardenPlant = (formData, setGardenPlants) => {
    //Get the current garden plants from local storage
    const gardenPlants = JSON.parse(localStorage.getItem("gardenPlants")) || [];

    //Add the new garden plant to the garden plants array
    gardenPlants.push(formData);

    //Save the new garden plants array to local storage
    localStorage.setItem("gardenPlants", JSON.stringify(gardenPlants));

    //Update the state of the garden plants
    setGardenPlants(gardenPlants);
  };

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
    deleteGardenGroup,
    getFruitData,
    getEdiblePlantData,
  };
};
