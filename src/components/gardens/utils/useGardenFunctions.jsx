import { useAuth, useGarden } from "../../../contextProviders";
import { usePostRequest } from "../../../hooks/usePostRequest";

export const useGardenFunctions = () => {
  const URL = import.meta.env.VITE_API_URL;

  const { user, token } = useAuth();
  const { gardenPlants, gardenGroups, setGardens, setGardenGroups, setGardenPlants } = useGarden();
  const { postData } = usePostRequest();

  const dialogMessage = {
    error: "There was an Error with your Request",
    delete: "Deleted Successfully",
  };
  /************************************************************
   *  Functions to Related to Gardens, Groups and Plants
   * ***********************************************************/

  // Function to Update the Garden Data from the API
  const updateGardenData = async () => {
    Promise.all([getGardens(), getGardenGroups(), getGardenPlants()])
      .then(([gardenData, gardenGroupData, gardenPlantData]) => {
        setGardens(gardenData);
        setGardenGroups(gardenGroupData);
        setGardenPlants(gardenPlantData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  /***GARDENS ********/
  const createGarden = async (formData) => {
    //Add the userID to the formData
    const newFormData = { ...formData, userID: user.id };

    //Send the new garden data to the API
    try {
      const result = await postData(URL + `users/${user.id}/gardens`, newFormData);

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
    // Remove all groups associated with the gardenID
    const deleteGroupRequests = gardenGroups
      .filter((group) => group.gardenID === gardenID)
      .map((group) => {
        return deleteGardenGroup(group.groupID);
      });

    Promise.all(deleteGroupRequests).then((result) => {
      console.log("All Groups Deleted", result);
    });

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
  const deleteGardenGroup = async (groupID) => {
    //Remove all plants associated with the groupID
    const deletePlantRequests = gardenPlants
      .filter((plant) => plant.groupID === groupID)
      .map((plant) => {
        console.log("plant", plant);
        return deleteGardenPlant(plant.gardenPlantID);
      });

    Promise.all(deletePlantRequests).then((result) => {
      console.log("All Plants Deleted", result);
    });

    // Make a DELETE request to the API to delete the garden group
    try {
      const request = await fetch(URL + `users/${user.id}/gardens/groups/${groupID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
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
  };

  /***PLANTS***/
  const createGardenPlant = async (plantData) => {
    console.log("plantData", plantData);
    // Make a Post request to the API to create a new garden plant
    try {
      const result = await postData(URL + `users/${user.id}/gardens/plants`, plantData);

      if (!result.status) {
        return dialogMessage.error;
      }

      // Update the state of the garden plants
      getGardenPlants().then((gardenPlantData) => {
        setGardenPlants(gardenPlantData);
      });

      return result.message;
    } catch (error) {
      console.error("Error connecting to the server", error);
    }
  };
  const getGardenPlants = async () => {
    try {
      const response = await fetch(URL + `users/${user.id}/gardens/plants`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.status) {
        return data.gardenPlants;
      }
    } catch (error) {
      console.error("Error fetching garden plants", error);
    }
  };
  const deleteGardenPlant = async (gardenPlantID) => {
    // Make a DELETE request to the API to delete the garden plant
    try {
      const request = await fetch(URL + `users/${user.id}/gardens/plants/${gardenPlantID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      console.log("response", response);

      if (!request.status) {
        return dialogMessage.error;
      }

      // Update the state of the garden plants
      getGardenPlants().then((gardenPlantData) => {
        setGardenPlants(gardenPlantData);
      });

      return response.message;
    } catch (error) {
      console.error("Error connecting to the server", error);
    }
  };

  const updatePlantAttributes = async (formData, property, plantData) => {

    // Make a UPDATE request to the API to delete the garden plant
    try {
      const request = await fetch(URL + `users/${user.id}/gardens/plants/${plantData.gardenPlantID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ formData, property, plantData }),
      });

      const response = await request.json();

      if (request.status) {

        // Update the state of the garden plants
        getGardenPlants().then((gardenPlantData) => {
          setGardenPlants(gardenPlantData);
        });
      }

      return response.message;

    } catch (error) {
      console.error("Error connecting to the server", error);
    }


  };

  /************************************************************
   *  Functions to Fetch Plant Data from the API
   * ***********************************************************/

  // Function to Fetch the List of All Plants from the Database
  const getAllPlants = async () => {
    try {
      const response = await fetch(URL + `api/plants`);
      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // function to Fetch all varieties of the specified plant from the Database
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

  // Function to Fetch the Plant/variety Data from the Database
  const getPlantData = async (plant, variety) => {
    const endPoint = variety ? `api/plants/${plant.id}/varieties/${variety.id}` : `api/plants/${plant.id}`;

    try {
      const response = await fetch(URL + endPoint);
      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to Fetch the Plant Description from the API/AI Route
  const getPlantDescription = async (plantName, variety) => {
    let plant = variety ? plantName.replace(/[^a-zA-Z0-9]/g, " ") + ", " + variety : plantName.replace(/[^a-zA-Z0-9]/g, " ");

    try {
      const response = await fetch(URL + `ai/plants/${plant}`);
      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to Fetch the Plant Properties from the API/AI Route
  const getAIResults = async (plant, variety, plantProps) => {
    try {
      const response = await fetch(URL + "ai/generatePlantInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plantName: plant ? plant : null,
          varietyName: variety ? variety : null,
          plantProperties: plantProps.map((prop) => {
            return { title: prop.title, description: prop.description };
          }),
        }),
      });

      if (response.status === 400) {
        return null;
      }

      const result = await response.json();
      return result;

      // Update the plantProps with the new information
    } catch (error) {
      console.error("Error:", error);
    }
  };
  /************************************************************
   *  Functions to add, update, delete plants and varieties to the database
   * ***********************************************************/

  // Function to Add a New Plant/Variety to the Database
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
    updateGardenData,
    createGarden,
    createGardenGroup,
    createGardenPlant,
    getGardens,
    getGardenGroups,
    getGardenPlants,
    deleteGarden,
    deleteGardenGroup,
    deleteGardenPlant,
    updatePlantAttributes,
    getAllPlants,
    getVariety,
    getPlantData,
    getPlantDescription,
    getAIResults,
    addNewPlant,
  };
};
