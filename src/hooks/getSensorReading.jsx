export function useGetSensorReading() {
  const URL = import.meta.env.VITE_API_URL;

  // Function to get the latest reading for a specific sensor
  async function getLatestReading(deviceID, measurement) {

    // Determine what endpoint to use based of supplied parameters.
    // If both are supplied, use the first endpoint, else use the second endpoint 
    const endpoint = deviceID && measurement ? `sensors/readSensor/latest?device_id=${deviceID}&measurement=${measurement}` 
    : `sensors/readSensor/latest/all?device_id=${deviceID}`

    try {
      const response = await fetch(URL + endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // If the response is not ok, return false
      if (!response.ok) {
        throw new Error("There was an error checking for device");
      }

      // Get the response data
      const responseData = await response.json();

      return responseData;
    } catch (error) {
      console.error("There was an error checking for device: ", error);
      throw error;
    }
  }

  return { getLatestReading };
}
