import { useParams } from 'react-router-dom';

export const Plant = () => {
    let { plantID } = useParams();

    console.log(plantID);

    return (
        <div>
            <h1>Plant: </h1> {plantID}
        </div>
    )
}

