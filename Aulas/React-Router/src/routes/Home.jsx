import { Link } from "react-router-dom"

// Carregamento de dados 

import {useFetch} from "../hooks/useFetch.jsx"

const url = "http://localhost:3000/products"

const Home = () => {
    const {data: items} = useFetch(url)


    return (
        <div>
            <h1>Home</h1>
            {/* Carregando dados  */}
            <ul className="products">
                {items && items.map((item) => <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>R$: {item.price}</p>
                    {/* Rota dinamica */}
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                </li>)}
            </ul>
        </div>
    )
}

export default Home