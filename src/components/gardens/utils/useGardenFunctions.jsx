import { useAuth, useGarden } from "../../../contextProviders";
import { usePostRequest } from "../../../hooks/usePostRequest";

export const useGardenFunctions = () => {
  const URL = import.meta.env.VITE_API_URL;

  const { user, token } = useAuth();
  const { setGardens, setGardenGroups, setGardenPlants } = useGarden();
  const { postData } = usePostRequest();

  const dialogMessage = {
    error: "There was an Error with your Request",
    delete: "Deleted Successfully",
  };
  /************************************************************
   *  Functions to Related to Gardens, Groups and Plants
   * ***********************************************************/

  /***GARDENS ********/
  const createGarden = async (formData) => {
    //Add the userID to the formData
    const newFormData = { ...formData, userID: user.id };

    //Send the new garden data to the API
    try {
      const result = await postData(
        URL + `users/${user.id}/gardens`,
        newFormData
      );

      // If the result status is false, return an error
      if (!result.status) {
        return dialogMessage.error;
      }

      // Update the state of the gardens
      getGardens().then((gardenData) => {
        setGardens(gardenData);
      });

      // Return Result Message for Dialog
      return result.message;
    } catch (error) {
      console.error("Error connecting to the server", error);
    }
  };

  const getGardens = async () => {
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
        // setGardens(data.gardenData);
        return data.gardenData;
      }
    } catch (error) {
      console.error("Error fetching gardens", error);
    }
  };

  // TODO: Handle the case where the garden has groups and plants
  const deleteGarden = async (gardenID) => {
    try {
      const result = await fetch(URL + `users/${user.id}/gardens/${gardenID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const response = await result.json();

      if (!result.status) {
        return dialogMessage.error;
      }

      // Update the state of the gardens
      getGardens().then((gardenData) => {
        setGardens(gardenData);
      });

      return response.message;
    } catch (error) {
      console.error("Error connecting to the server", error);
    }

    // //For each Group that matches the Garden ID, Run the deleteGardenGroup function
    // gardenGroups.forEach((group) => {
    //   if (group.gardenID === gardenID) {
    //     deleteGardenGroup(group.groupID, setGardenGroups, setGardenPlants);
    //   }
    // });
  };

  /***GROUPS ********/
  const createGardenGroup = async (formData) => {
    //Make a POST request to the API to create a new garden group
    try {
      const result = await postData(URL + `users/${user.id}/gardens/groups`, {
        formData,
      });

      console.log("result", result);

      // If the result status is false, return an error
      if (!result.status) {
        return "error";
      }

      // Update the state of the garden groups
      getGardenGroups().then((gardenGroupData) => {
        setGardenGroups(gardenGroupData);
      });
    } catch (error) {
      console.error("Error connecting to the server", error);
    }
  };

  const getGardenGroups = async () => {
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
        return data.gardenGroups;
      }
    } catch (error) {
      console.error("Error fetching garden groups", error);
    }
  };
  // TODO: Handle the case where the group has plants
  const deleteGardenGroup = async (groupID) => {
    // Make a DELETE request to the API to delete the garden group
    try {
      const request = await fetch(
        URL + `users/${user.id}/gardens/groups/${groupID}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await request.json();

      if (!request.status) {
        return dialogMessage.error;
      }

      // Update the state of the garden groups
      getGardenGroups().then((gardenGroupData) => {
        setGardenGroups(gardenGroupData);
      });

      return response.message;

      // Update the state of the garden groups
    } catch (error) {
      console.error("Error connecting to the server", error);
    }

    //Remove all plants associated with the groupID
    // deleteGardenPlant(null, setGardenPlants, groupID);
  };

  /***PLANTS***/
  const createGardenPlant = async (plantData) => {
    console.log("plantData", plantData);
    // Make a Post request to the API to create a new garden plant
    try {
      const result = await postData(
        URL + `users/${user.id}/gardens/plants`,
        plantData
      );

      if (!result.status) {
        return dialogMessage.error;
      }

      // // Update the state of the garden plants
      // getGardenPlants().then((gardenPlantData) => {
      //   setGardenPlants(gardenPlantData);
      // });

      console.log("result", result);
      return result.message;
    } catch (error) {
      console.error("Error connecting to the server", error);
    }
  };
  const getGardenPlants = async () => {};
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

  // Function to Add Plant Attributes to the Local Storage and Garden Plant State
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
   *  Functions to Fetch Plant Data from the API
   * ***********************************************************/

  // Function to Fetch the List of All Plants from the API
  const getAllPlants = async () => {
    try {
      const response = await fetch(URL + `api/plants`);
      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // function to Fetch the varieties of the specified plant from the API
  const getVariety = async (plantName) => {
    try {
      const response = await fetch(URL + `api/plants/${plantName}/varieties`);
      const result = await response.json();

      // console.log(plantName, result);
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getPlantData = async (plant, variety) => {
    const endPoint = variety
      ? `api/plants/${plant.id}/varieties/${variety.id}`
      : `api/plants/${plant.id}`;

    try {
      const response = await fetch(URL + endPoint);
      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getPlantDescription = async (plantName, variety) => {
    let plant = variety ? plantName + ", " + variety : plantName;

    try {
      const response = await fetch(URL + `ai/plants/${plant}`);
      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  /************************************************************
   *  Functions to add, update, delete plants and varieties to the database
   * ***********************************************************/

  // Function to Add a New Plant to the Database
  // TODO: Ensure secuity by adding authentication to to the Post request (UsePostRequest Hook)
  // Ensure API is using correct verification middlewhere before proceeding to next route
  const addNewPlant = async (formData) => {
    // Send the new plant data to the API
    try {
      const response = await fetch(URL + `api/plants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      result.status = response.status;

      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    createGarden,
    createGardenGroup,
    createGardenPlant,
    getGardens,
    getGardenGroups,
    getGardenPlants,
    deleteGarden,
    deleteGardenGroup,
    deleteGardenPlant,
    addPlantAttributes,
    getAllPlants,
    getVariety,
    getPlantData,
    getPlantDescription,
    addNewPlant,
  };
};
