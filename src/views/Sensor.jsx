import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuthProvider";
import { Container } from "@mui/material";

import { getIcon } from "../components/sensorData/util/getIcon";

import BreadCrumbNav from "../components/nav/BreadCrumbNav";
import SensorOverviewContainer from "../components/sensorData/SensorOverviewContainer";
import SensorDataExplorer from "../components/sensorData/SensorDataExplorer";

const SensorData = () => {
  const location = useLocation();
  const { deviceID } = useAuth();

  //Sensor Information Passed in the Location and Param State from the Sensor Dashboard
  // const { sensor } = useParams();
  const latestReading = location.state?.latestReading ? location.state.latestReading : 0;
  const measurement = location.state?.measurement ? location.state.measurement : "PH";

  //Get the Icon for the Selected Sensor
  const SensorIcon = getIcon(measurement);


  return (
    <Container maxWidth={"none"}>
      {/* BreadCrumb Navigation Section*/}
      <BreadCrumbNav
        Icon={SensorIcon}
        path='Sensor Dashboard'
        sensorName={measurement}
      />

      {/* Overview Banner Section*/}
      <SensorOverviewContainer
        deviceID={deviceID}
        measurement={measurement}
        latestReading={latestReading}
      />
      {/* Data Explorer Section */}
        <SensorDataExplorer
            deviceID={deviceID}
            measurement={measurement}
        />

    </Container>
  );
};

export default SensorData;
