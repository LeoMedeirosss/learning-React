import { useState } from "react";

const ManageData = () => {
    let valor = 10;

    const [number, setNumber] = useState(11);

    console.log(number);

    return (
    <div>
        <div>
            <p>Valor = {valor}</p>
            <button onClick={() => (valor = 15)}>Mudar Valor</button>
        </div>

        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar o State</button>
        </div>
    </div>
    )
}

export default ManageData
