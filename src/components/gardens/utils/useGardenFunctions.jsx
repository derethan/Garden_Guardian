import { useState } from "react";

export const useGardenFunctions = () => {
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
  return { createGarden, createGardenGroup };
};
