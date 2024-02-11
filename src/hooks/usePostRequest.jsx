/******************************************
 * Author : Andrew Patterson
 * Description : Custom hook to handle POST requests
 * ********************************************/

import { useState } from "react";

export const usePostRequest = () => {
  const [postMessage, setPostMessage] = useState("");
  const [postStatus, setPostStatus] = useState();

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

      const responseData = await response.json();
      setPostMessage(responseData.message);

      if (!response.ok) {
        throw new Error(
          `${responseData.message} Status: ${response.status}` ||
            `There was an error updating the database. Status: ${response.status}`
        );
      }

      return response.ok;

    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return [postStatus, postMessage, setPostStatus, postData];
};
