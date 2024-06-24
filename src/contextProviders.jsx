import { useContext } from "react";
import { AuthContext } from "./hooks/useAuthProvider";
import { GardenContext } from "./hooks/useGardenProvider";

//Create the hook
export const useAuth = () => useContext(AuthContext);
export const useGarden = () => useContext(GardenContext);
