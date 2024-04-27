/**
 *  This page contains the Sensors component, 
 * which is the main page for the user to view their sensor data.
 */

// Imports
import { useState } from "react";
import { useAuth } from "../hooks/useAuthProvider";

// Components
import AddDevice from "../components/modals/AddDevice";
import LoadingScreen from "../components/LoadingScreen";
import SensorData from "../components/sensorData/SensorData";

const Sensors = () => {
  const { hasDevice } = useAuth();
  const [showAddDeviceModal, setShowAddDeviceModal] = useState(true);

  // If the user has a device, render the SensorData component.
  // otherwise, render the LoadingScreen and AddDevice components.
  return (
    <>
      {hasDevice ? (
        <SensorData />
      ) : (
        <>
          <LoadingScreen />
          <AddDevice
            display={showAddDeviceModal}
            setShowAddDeviceModal={setShowAddDeviceModal}
          />
        </>
      )}
    </>
  );
};

export default Sensors;
