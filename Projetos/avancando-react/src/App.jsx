
import './App.css'
// Imagem em assets
import viaLactia from './assets/via-lactea.jpg'
import CondicionalRender from './components/CondicionalRender'
import Data from './components/Data'
import ListRender from './components/ListRender'

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
      <ListRender/>

  </div>
  <div>
    <CondicionalRender/>
  </div>
    </>
  )
}

export default App
