export function useGetDeviceInfo() {
  async function checkForDevice() {
    //Import url from.env
    const URL = import.meta.env.VITE_API_URL;

    try {
      // Make a request to the server to check if the user has a device
      const response = await fetch(URL + "users/checkForDevice", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        return false;
      }

      // Get the response data
      const responseData = await response.json();

      //return response data
      return responseData;
    } catch (error) {
      console.error("There was an error checking for device: ", error);
      return false;
    }
  }

  async function isDeviceActive(deviceID) {
    //Import url from.env
    const URL = import.meta.env.VITE_API_URL;

    try {
      // Make a request to the server to check the latest timestamp for the device
      const response = await fetch(URL + "sensors/status", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          device_id: deviceID.deviceID,
        },
      });

      if (!response.ok) {
        return false;
      }

      // Get the response data
      const responseData = await response.json();

      if (responseData.status === "online") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("There was an error checking for device: ", error);
      return false;
    }
  }

  return { checkForDevice, isDeviceActive };
}
