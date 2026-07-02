
import './App.css'
import Counter from './components/Counter'
import Title from './components/Title'

import Newyaer from './img/ananovo.png'

import useCountdown from './hooks/useCountdown'

function App() {
  const [
    dayNumber, hourNumber, minuteNumber, secondNumber
  ] = useCountdown('Jan 1, 2027 00:00:00');

  return (
    <div className="App" style={{ backgroundImage: `url(${Newyaer})` }}>
      <div className="container">
        <Title title='Contagem regressiva para 2027' />
        <div className="countdown-container">
          <Counter title='Dias' number={dayNumber} />
          <Counter title='Horas' number={hourNumber} />
          <Counter title='Minutos' number={minuteNumber} />
          <Counter title='Segundos' number={secondNumber} />
        </div>
      </div>
    </div>

  )
}

export default App
