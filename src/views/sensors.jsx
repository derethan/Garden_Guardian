/**
 * Renders the Sensors view.
 * 
 * @returns {JSX.Element} The rendered Sensors component.
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
      <div>
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
      </div>
    </>
  );
};

export default Sensors;
