import { createContext, useState } from "react";

//Create the context
const GardenContext = createContext();

// Create the Garden Context Provider
const GardenProvider = ({ children }) => {
  const [gardens, setGardens] = useState(null);
  const [gardenGroups, setGardenGroups] = useState(null);

  const [gardenPlants, setGardenPlants] = useState(() => {
    // const allPlants = JSON.parse(localStorage.getItem("gardenPlants")) || [];
    // return allPlants.filter((plant) => plant.userID === user.id);
  });

  return (
    <GardenContext.Provider
      value={{
        gardens,
        setGardens,
        gardenGroups,
        setGardenGroups,
        gardenPlants,
        setGardenPlants,
      }}
    >
      {children}
    </GardenContext.Provider>
  );
};

// Export the Garden Context and Provider
export default GardenProvider;

export { GardenContext };
