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
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("user" || ""));
  const [token, setToken] = useState(localStorage.getItem("token" || ""));

  //Create the post request hook
  const [postStatus, postMessage, , , postData] = usePostRequest();

  const loginAction = async (data) => {
    try {
      // Post the data to the server
      const user = await postData(URL + "users/login", data);

      if (user) {

        // Set the token
        setToken(user.token);
        localStorage.setItem("token", user.token);

        // Set the logged in state
        setIsLoggedIn(true);

        // Set the user
        setUser(user.user);
        localStorage.setItem("user", JSON.stringify(user.user));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle the Logout
  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };


  //Make a request to the protected route on the server to verify token
  const verifyToken = async (token) => {
    const response = await fetch(URL + "users/protected", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.json();

    //Handle response status's
    // TODO: Handle response codes, handle if token is valid, not valid and expired
    // If user is logged in status and it returns expired then a new token should be requested
    // if token is not valid then the user should be logged out
    // if token is valid then the user should be allowed to continue

    if (!response.ok) {
      console.error(response);
      console.error(responseData.message);
      logout();
    } else {
      
      console.log(responseData);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        loginAction,
        logout,
        verifyToken,
        postStatus,
        postMessage,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//Export the provider
export default AuthProvider;

//Create the hook
export const useAuth = () => {
  return useContext(AuthContext);
};
