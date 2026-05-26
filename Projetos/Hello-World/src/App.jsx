import { useState } from 'react'


import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

function App() {
  


  return (
    <>

      <h1>Hello World</h1>

      <div className="App">
        <h1>Fundamentos do React</h1>
        <FirstComponent/>
        {/* Inserir comentario */}
        {/* Inserir codigo JS aqui */}

        <TemplateExpression/>
        <MyComponent/>
        <Events/>
      </div>
    </>
  )
}

export default App
