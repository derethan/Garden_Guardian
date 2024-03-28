import  { useState } from 'react';

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

return { createGarden };
}


