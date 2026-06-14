
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <div className="app">
      <NavBar/>
      <Outlet/>
      <p>Footer</p>
      
      
    </div>
  )
}

export default App
