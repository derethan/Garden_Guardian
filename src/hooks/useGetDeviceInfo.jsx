
export function useGetDeviceInfo() {

    async function userHasDevice() {
        // Simulate fetching user data (replace with actual logic to check if a device is added)
        const userHasDevice = true; // Replace with actual logic to check if user has a device
        return userHasDevice;
    }

    return { userHasDevice };
}

