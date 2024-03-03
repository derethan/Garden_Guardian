import { useEffect, useState } from "react";
import AddDevice from "../components/modals/AddDevice";

import LoadingScreen from "../components/LoadingScreen";

import { useGetDeviceInfo } from "../hooks/useGetDeviceInfo";


const Sensors = () => {

  const [loading, setLoading] = useState(true);
  const [hasDevice, setHasDevice] = useState(false);
  const [showAddDeviceModal, setShowAddDeviceModal] = useState(true);

  const { userHasDevice } = useGetDeviceInfo();

  useEffect(() => {
    //check if the user has a device

    if (userHasDevice) {
      setHasDevice(true);
      setLoading(false);
      return;
    }
    


    // Simulate fetching user data (replace with actual logic to check if a device is added)
    setTimeout(() => {
      const userHasDevice = false; // Replace with actual logic to check if user has a device
      setHasDevice(userHasDevice);
      setLoading(false);
    }, 2000); // Simulating loading time

  }, [userHasDevice]);

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
            <AddDevice display={showAddDeviceModal} setShowAddDeviceModal={setShowAddDeviceModal} setHasDevice={setHasDevice} />
            </>
        )}
      </div>
    </>
  );
};

export default Sensors;
