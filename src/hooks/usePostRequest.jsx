/******************************************
 * Author : Andrew Patterson
 * Description : Custom hook to handle POST requests
 * ********************************************/

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./useAuthProvider";

// Custom hook to handle POST requests
export const usePostRequest = () => {
  const [postMessage, setPostMessage] = useState(""); // Message returned from the API
  const [postStatus, setPostStatus] = useState(null); // Status of the POST request
  const [responseData, setResponseData] = useState({}); // All response Data returned from the API

  // Get the token from the Auth context
  const user = useAuth();

  const navigate = useNavigate();

  // Function to post the Data to the API endpoint and return the response
  async function postData(url, data) {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      // If a Token is assigned (AKA the user is logged in) add the token to the headers
      if (user) {
        const token = user.token;
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });

      //if there is a response header
      const responseToken = (response.headers.get("Authorization") || "").split(" ")[1];
       
      setPostStatus(response.status);

      // Get the response data
      const responseData = await response.json();
      setResponseData(responseData); // Set the response data
      setPostMessage(responseData.message); // Set the response message

      // Add the token to the response data
      responseData.token = responseToken;
      responseData.status = response.status;

      // Return the response data
      return responseData;


    } catch (error) {
      console.error(error);
      // navigate("/error503");
      return false;
    }
  }

// // FOR DEBUGGING
// useEffect(() => {
//   // Use the response data
//   if (postStatus && postMessage && responseData) {
//       // Log the status and message
//   console.log('Status:', postStatus);
//   console.log('Message:', postMessage);
//     console.log('Response data:', responseData);
//       }
// }, [postStatus, postMessage, responseData]);

  return [postStatus, postMessage, responseData, setPostMessage, postData];
};
