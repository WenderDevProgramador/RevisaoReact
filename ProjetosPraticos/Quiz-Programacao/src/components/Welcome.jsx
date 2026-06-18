import './Welcome.css'
import Quiz from '../../img/quiz.svg'

const Welcome = () => {
    return (
        <div id='welcome'>
            <h2>Sejá bem-vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button>Iniciar</button>
            <img src={Quiz} alt="Inicio-Quiz" />

        </div>
    )
}

export default Welcome