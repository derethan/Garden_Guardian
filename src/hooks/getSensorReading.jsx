export function useGetSensorReading() {
  // Function to get the latest reading for a device
  async function getLatestReading(deviceID, measurement) {
    //Import url from.env
    const URL = import.meta.env.VITE_API_URL;
    const endpoint = `sensors/readSensor/latest?device_id=${deviceID}&measurement=${measurement}`;

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

      return responseData.value;
    } catch (error) {
      console.error("There was an error checking for device: ", error);
      throw error;
    }
  }

  return { getLatestReading };
}
