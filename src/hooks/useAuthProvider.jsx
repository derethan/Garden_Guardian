//import Context API
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { usePostRequest } from "./usePostRequest";

//Create the context
const AuthContext = createContext();
const URL = import.meta.env.VITE_API_URL;

//Create the provider
const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    //Setup the state
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token' || ''));

    //Create the post request hook
    const [postStatus, postMessage, responseData, , postData] = usePostRequest();


  const loginAction = async (data) => {

    try {
       // Post the data to the server
       const success = await postData(URL + "users/login", data);

        if (success) {
          // Set the token
          setToken(responseData.token);
          localStorage.setItem('token', responseData.token);
          setIsLoggedIn(true);
          // Set the user
          setUser(responseData.user);
          // Navigate to the dashboard
        }


    } catch (error) {
      console.error(error);
    }

  };

  // Handle the Logout
  const logout = () => {

    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate ("/login");
  }


    return (
        <AuthContext.Provider value={{token, user, loginAction, logout, postStatus, postMessage}}>
            {children}
        </AuthContext.Provider>
    );
}

//Export the provider
export default AuthProvider;

//Create the hook
export const useAuth = () => {
    return useContext(AuthContext);
  };
