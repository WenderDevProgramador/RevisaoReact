
import './App.css'
// Imagem em assets
import viaLactia from './assets/via-lactea.jpg'
import Data from './components/Data'

// Importar os hooks

function App() {


  return (
    <>
  <div className='App' style={{paddingBomtton: '500px'}}>
    <h1>Avançando em React</h1>
    {/* Imagem em public */}
    <div className='imagens'>
      <img src='/saturno.webp' alt='Alguma imagem'/>
      </div>
      <div  className='imagens'>
          <img src={viaLactia} alt="Imagem" />
      </div>

      <Data/>
  </div>
    </>
  )
}

export default App
