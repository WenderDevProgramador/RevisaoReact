
import './App.css'
import MyForm from './components/MyForm'
import {useState} from 'react'

function App() {


  return (
    <>
  <div className="App">
    <h1>Form em React</h1>
    <MyForm userName="John Doe" email="john.doe@example.com"/>
    
  </div>
    </>
  )
}

export default App
