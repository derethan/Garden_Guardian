import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { usePostRequest } from "./usePostRequest";

import { useGetDeviceInfo } from "./useGetDeviceInfo";

//Create the context
const AuthContext = createContext();
const URL = import.meta.env.VITE_API_URL;

//Create the provider
const AuthProvider = ({ children }) => {
  // Declarations
  const { checkForDevice } = useGetDeviceInfo();
  const navigate = useNavigate();

  //Setup State Variables for User related States
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || ""
  );
  const [token, setToken] = useState(localStorage.getItem("token" || ""));

  //Setup State variables for Device Related States
  const [hasDevice, setHasDevice] = useState(false);
  const [devices, setDeviceInfo] = useState([]);

  // State variables for Current selected Device
  const [deviceID, setDeviceID] = useState("");
  const [deviceStatus, setDeviceStatus] = useState("offline");

  //Check if the user has a device
  useEffect(() => {
    async function fetchDeviceInfo() {
      //check if the user has a device
      const response = await checkForDevice();

      if (response.status) {
        // Setup the device state (devices) and Current Active Device (deviceID)
        let allDevices = response.device_id;
        allDevices.forEach((device) => {
          setDeviceInfo((prevState) => [...prevState, { deviceID: device }]);
        });

        // Set the hasDevice state to true
        setHasDevice(true);

        // Set the first device as the active device, if there is no active device in local storage
        if (localStorage.getItem("activeDevice")) {
          setDeviceID(localStorage.getItem("activeDevice"));
        } else {
          setDeviceID(response.device_id[0]);
          localStorage.setItem("activeDevice", response.device_id[0]);
        }

        return;
      }
    }

    if (!hasDevice && isLoggedIn && localStorage.getItem("user")) {
      fetchDeviceInfo();
    }
  }, [ isLoggedIn]); // eslint-disable-line

  //Create the post request hook - TODO: CHANGE TO OBJECT FROM ARRAY IN USEPOSTREQUEST
  const [postStatus, postMessage, , , postData] = usePostRequest();

  //Handle the login
  const loginAction = async (data) => {
    try {
      // Post the data to the server
      const responseData = await postData(URL + "users/login", data);

      if (responseData && responseData.status === 201) {
        // Set the token
        setToken(responseData.token);
        localStorage.setItem("token", responseData.token);

        // Set the logged in state
        setIsLoggedIn(true);

        // Set the user
        setUser(responseData.user);
        localStorage.setItem("user", JSON.stringify(responseData.user));
      }

      return responseData;
    } catch (error) {
      console.error(error);
    }
  };

  // Handle the Logout
  const logout = () => {
    setIsLoggedIn(false);
    setHasDevice(false);
    setUser(null);
    setToken("");
    setDeviceID("");
    setDeviceInfo([]);

    //Remove Local Storage Items
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("activeDevice");
  };

  //Make a request to the protected route on the server to verify token
  const verifyToken = async (token) => {
    if (localStorage.getItem("token")) {
      try {
        const response = await fetch(URL + "users/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Get the response data
        const responseData = await response.json();

        // If the response is not ok then log the user out
        if (!response.ok) {
          console.error(responseData.message);
          logout();
        } else {
          // Get the response token and update the state and local storage with the new token
          const responseToken = response.headers
            .get("Authorization")
            .split(" ")[1];
          setToken(responseToken);
          localStorage.setItem("token", responseToken);

          // console.log("Token Verified: ", responseData.message);
        }
      } catch (error) {
        console.error("503 Service Unavailable", error);
        navigate("/error503");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isLoggedIn,
        hasDevice,
        devices,
        deviceID,
        deviceStatus,
        loginAction,
        logout,
        verifyToken,
        setHasDevice,
        setDeviceID,
        setDeviceStatus,
        postStatus,
        postMessage,
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
