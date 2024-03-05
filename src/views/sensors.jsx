import { useState } from "react";
import AddDevice from "../components/modals/AddDevice";

import LoadingScreen from "../components/LoadingScreen";
import SensorData from "../components/sensorData/SensorData";
import { useAuth } from "../hooks/useAuthProvider";

const Sensors = () => {
  const { hasDevice } = useAuth();
  const [showAddDeviceModal, setShowAddDeviceModal] = useState(true);

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
              // setHasDevice={setHasDevice}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Sensors;
