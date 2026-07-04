import './Home.css'

import { useContext, useState } from 'react'
import { CountdownContext } from '../context/countdownContext.jsx'

import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')
    const [color, setColor] = useState('#000000')

    const { setEvent } = useContext(CountdownContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const eventObject = {
            title,
            date,
            image,
            color
        }

        setEvent(eventObject);
        navigate('/countdown');
    }

    return (
        <div className="home">
            <h2>Monte sua contagem regressiva!</h2>
            <form className="countdown-form" onSubmit={handleSubmit}>
                <label >
                    <span>Título:</span>
                    <input type="text" name="title" placeholder="Digite o título do evento!" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>

                <label >
                    <span>Data do evento:</span>
                    <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </label>

                <label >
                    <span>Imagem:</span>
                    <input type="text" name="image" placeholder="Digite a URL da imagem!" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>

                <label >
                    <span>Cor tema:</span>
                    <input type="color" name="color" value={color} onChange={(e) => setColor(e.target.value)} required />
                </label>

                <input type="submit" value="Criar" />
            </form>
        </div>
    )
}

export default Home