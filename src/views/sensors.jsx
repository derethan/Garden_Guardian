import { useEffect, useState } from "react";
import AddDevice from "../components/AddDevice";

import LoadingScreen from "../components/LoadingScreen";


const Sensors = () => {
  const [loading, setLoading] = useState(true);
  const [hasDevice, setHasDevice] = useState(false);
  const [showAddDeviceModal, setShowAddDeviceModal] = useState(true);

  useEffect(() => {
    // Simulate fetching user data (replace with actual logic to check if a device is added)
    setTimeout(() => {
      const userHasDevice = false; // Replace with actual logic to check if user has a device
      setHasDevice(userHasDevice);
      setLoading(false);
    }, 2000); // Simulating loading time
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <LoadingScreen />
        ) : hasDevice ? (
          <h1>Has Sensor</h1>
        ) : (
            <>
            <LoadingScreen />
            <AddDevice display={showAddDeviceModal} />
            </>
        )}
      </div>
    </>
  );
};

export default Sensors;
