import { useContext } from "react";
import { AuthContext } from "./useAuthProvider";
import { GardenContext } from "../../hooks/useGardenProvider";
import AuthProvider from "./useAuthProvider";
import GardenProvider from "../../hooks/useGardenProvider";

// Create the hooks
export const useAuth = () => useContext(AuthContext);
export const useGarden = () => useContext(GardenContext);

// Combined context providers wrapper
export const ContextProviders = ({ children }) => {
  return (
    <AuthProvider>
      <GardenProvider>{children}</GardenProvider>
    </AuthProvider>
  );
};

export default ContextProviders;
