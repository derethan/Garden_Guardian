
export function useGetDeviceInfo() {

    async function checkForDevice () {
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
          //return true if the response is 200, otherwise return false
            return response.ok;


        } catch (error) {
            console.error("There was an error checking for device: ", error);
            return false;
        }

    }

    return { checkForDevice };
}

