/******************************************
 * Author : Andrew Patterson
 * Description : Custom hook to handle POST requests
 * ********************************************/

import { useEffect, useState } from "react";

export const usePostRequest = () => {
  const [postMessage, setPostMessage] = useState(""); // Message returned from the API
  const [postStatus, setPostStatus] = useState(null); // Status of the POST request
  const [responseData, setResponseData] = useState({}); // All response Data returned from the API

  // Function to post the Data to the API endpoint and return the response
  async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setPostStatus(response.status);

      // Get the response data
      const responseData = await response.json();
      setResponseData(responseData);

      // Set the post message
      setPostMessage(responseData.message);

      if (!response.ok) {
        throw new Error(
          `${responseData.message} Status: ${response.status}` ||
            `There was an error updating the database. Status: ${response.status}`
        );
      }

      return responseData;
    } catch (error) {
      console.error(error);
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
