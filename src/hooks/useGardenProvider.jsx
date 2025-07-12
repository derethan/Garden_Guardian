import { createContext, useState } from "react";

//Create the context
const GardenContext = createContext();

// Create the Garden Context Provider
const GardenProvider = ({ children }) => {
  const [gardens, setGardens] = useState(null);
  const [gardenGroups, setGardenGroups] = useState(null);
  const [gardenPlants, setGardenPlants] = useState(null);

  // State to hold the result message for adding new Gardens/Groups/Plants
  const [resultMessage, setResultMessage] = useState("");

  return (
    <GardenContext.Provider
      value={{
        gardens,
        setGardens,
        gardenGroups,
        setGardenGroups,
        gardenPlants,
        setGardenPlants,
        resultMessage,
        setResultMessage,
      }}
    >
      {children}
    </GardenContext.Provider>
  );
};

// Export the Garden Context and Provider
export default GardenProvider;

export { GardenContext };
