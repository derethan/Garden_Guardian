import { useContext } from "react";
import { AuthContext } from "./hooks/useAuthProvider";

//Create the hook
export const useAuth = () => useContext(AuthContext);
