  //Calculates the Average of the Sensor Data
  export const average = (data) => {
    let average = (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2);
    return average;
  };
  //Calculates the Object in SensorData with the Lowest value
  export const lowestPoint = (data) => {
    let low = data.reduce((lowest, current) => {
      return lowest && lowest.value < current.value ? lowest : current;
    }, null);

    return low;
  };

  //calculates the Object in SensorData with the Highest value
  export const highestPoint = (data) => {
    let high = data.reduce((highest, current) => {
      return highest && highest.value > current.value ? highest : current;
    }, null);

    return high;
  };