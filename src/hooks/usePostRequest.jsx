// React hook to send post data to the API server
export const usePostRequest = () => {
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

      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error("End point not found");
        } else {
          throw new Error(
            `There was an error updating the database. Status: ${response.status}`
          );
        }
      }

      await response.json();
      return response.ok;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return [postData];
};
