import { Outlet } from 'react-router-dom'


import './App.css'
import Counter from './components/Counter'
import Title from './components/Title'

import Newyaer from './img/ananovo.png'

import useCountdown from './hooks/useCountdown'
import { useContext } from 'react'
import { CountdownContext } from './context/countdownContext.jsx'

function App() {

  const { event } = useContext(CountdownContext);

  let eventImage = null;
  if (event) eventImage = event.image;


  return (
    <div
      className="App"
      style={{
        backgroundImage: event && event.image
          ? `url(${event.image})`
          : `url(${Newyaer})`
      }}
    >

      <div className="container">

        <Outlet />
      </div>
    </div>

  )
}

export default App
