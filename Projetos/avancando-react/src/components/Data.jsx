// Importar os hooks

import { useState } from 'react'

const Data = () => {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15)

    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData + 15)} type="button">Mudar Variável</button>

            <p>Valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)} type="button">Mudar Variável</button>

        </div>
    )
}

export default Data