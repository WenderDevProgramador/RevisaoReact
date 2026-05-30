

const CardDetails = ({brand,model, km, color}) => {
    return (
        <div>
            <h2>
                Detalhes do carro:
            </h2>

            <ul>
                <li>Modelo:{model} </li>
                <li>Kilometragem: {km}</li>
                <li>Marca: {brand}</li>
                <li>Cor: {color}</li>
                
                
            </ul>
        </div>
    )
}

export default CardDetails