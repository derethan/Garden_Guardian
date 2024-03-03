import { useEffect, useState } from "react";
import AddDevice from "../components/modals/AddDevice";

import LoadingScreen from "../components/LoadingScreen";

import { useGetDeviceInfo } from "../hooks/useGetDeviceInfo";

const Sensors = () => {
  const [loading, setLoading] = useState(true);
  const [hasDevice, setHasDevice] = useState(false);
  const [showAddDeviceModal, setShowAddDeviceModal] = useState(true);

  const { checkForDevice } = useGetDeviceInfo();

  useEffect(() => {
    async function fetchData() {
      //check if the user has a device
      const deviceExists = await checkForDevice();

      if (deviceExists) {
        setHasDevice(true);
        setLoading(false);
        return;
      }
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
            <AddDevice
              display={showAddDeviceModal}
              setShowAddDeviceModal={setShowAddDeviceModal}
              setHasDevice={setHasDevice}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Sensors;
