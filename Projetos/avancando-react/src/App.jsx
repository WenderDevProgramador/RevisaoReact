
import { useState } from 'react'
import './App.css'
// Imagem em assets
import viaLactia from './assets/via-lactea.jpg'
import CardDetails from './components/CardDetails'
import CondicionalRender from './components/CondicionalRender'
import Container from './components/Container'
import Data from './components/Data'
import ExecuteFunction from './components/ExecuteFunction'
import { Fragments } from './components/Fragments'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

// Importar os hooks

function App() {

  const showMessage = () => {
    alert('Minha avó tá maluca!')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => setMessage( msg)

  const cars = [
    { id: 1, brand: "Toyota", model: "Corolla", color: "Prata", km: 35000 },
    { id: 2, brand: "Honda", model: "Civic", color: "Preto", km: 42000 },
    { id: 3, brand: "Ford", model: "Focus", color: "Azul", km: 28000 },
    { id: 4, brand: "Chevrolet", model: "Onix", color: "Branco", km: 15000 },
    { id: 5, brand: "Volkswagen", model: "Golf", color: "Vermelho", km: 50000 },
    { id: 6, brand: "Hyundai", model: "HB20", color: "Cinza", km: 22000 },
    { id: 7, brand: "Nissan", model: "Sentra", color: "Prata", km: 33000 },
    { id: 8, brand: "Renault", model: "Kwid", color: "Laranja", km: 12000 },
    { id: 9, brand: "Peugeot", model: "208", color: "Azul", km: 27000 },
    { id: 10, brand: "Fiat", model: "Argo", color: "Preto", km: 18000 },
    { id: 11, brand: "Jeep", model: "Compass", color: "Branco", km: 40000 },
    { id: 12, brand: "BMW", model: "320i", color: "Cinza", km: 60000 },
    { id: 13, brand: "Mercedes-Benz", model: "C200", color: "Prata", km: 55000 },
    { id: 14, brand: "Audi", model: "A3", color: "Vermelho", km: 35000 },
    { id: 15, brand: "Kia", model: "Sportage", color: "Azul", km: 25000 },
    { id: 16, brand: "Mitsubishi", model: "Lancer", color: "Preto", km: 47000 },
    { id: 17, brand: "Subaru", model: "Impreza", color: "Branco", km: 30000 },
    { id: 18, brand: "Mazda", model: "CX-5", color: "Cinza", km: 28000 },
    { id: 19, brand: "Volvo", model: "XC60", color: "Prata", km: 32000 },
    { id: 20, brand: "Land Rover", model: "Discovery", color: "Verde", km: 45000 },
    { id: 21, brand: "Chevrolet", model: "Cruze", color: "Azul", km: 37000 },
    { id: 22, brand: "Toyota", model: "Yaris", color: "Amarelo", km: 21000 },
    { id: 23, brand: "Honda", model: "Fit", color: "Rosa", km: 19000 },
    { id: 24, brand: "Ford", model: "Ka", color: "Preto", km: 16000 },
    { id: 25, brand: "Fiat", model: "Uno", color: "Branco", km: 8000 }
  ];





  return (
    <>
      <div className='App' style={{ paddingBomtton: '500px' }}>
        <h1>Avançando em React</h1>
        {/* Imagem em public */}
        <div className='imagens'>
          <img src='/saturno.webp' alt='Alguma imagem' />
        </div>
        <div className='imagens'>
          <img src={viaLactia} alt="Imagem" />
        </div>

        <Data />
        <ListRender />

      </div>
      <div>
        <CondicionalRender />
      </div>

      <div>
        {/* Props */}
        <ShowUserName name='Wender' />
      </div>
      <div>
        {/* Destruturando props */}
        <CardDetails brand='VW' model={'Polo'} km={15023} color={'Preto'} />
        <CardDetails brand='GM' model={'Onix'} km={1523} color={'Vermelho'} />
        <CardDetails brand='Fiat' model={'Argo'} km={5223} color={'Cinza'} />
        <CardDetails brand='Honda' model={'Civic'} km={31523} color={'Prata'} />

      </div>

      <div>
        {/* Renderização de lista */}

        {cars.map((car) => <CardDetails 
        brand= {car.brand} 
        model={car.model} 
        km={car.km} 
        color={car.color} 
        />)}
      </div>

      <div>
        {/* Fragments <> </>*/}
          <Fragments/>

      </div>

      <div>
        {/* Children */}
        <Container> 
          <p>Alguma coisa</p>
        </Container>
        <Container>
          <h4>Teste</h4>
          <p>Meu componente pai</p>
        </Container>
      </div>
      <div>
        {/* Função em prop */}
        <ExecuteFunction myFunction={showMessage}/>
      </div>

      <div>
        {/* Elevação de state ou State Lift*/}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>

      </div>
    </>
  )
}

export default App
