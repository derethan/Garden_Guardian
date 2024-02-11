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

      const responseData = await response.json();

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

  return [postData];
};
