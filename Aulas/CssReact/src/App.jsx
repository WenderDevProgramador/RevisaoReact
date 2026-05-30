
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 15
  const  redTitle = true;


  return (
    <>
      <div className='App'>
        {/* Css Global */}
        <h1>CSS no React</h1>
        {/* Css de componente */}
        <MyComponent/>
        <p>Não pegou o estilo do componente pois foi usado classes para não vaza o css do component</p>
        {/* Inline style */}
        <p style={{color: "blue", padding: "25px", borderTop: "5px dotted blue"}}>Esse elemento tem estilos inline</p>

        {/* Inline style dinamico */}
        <h2 style={n > 20 ? { color: "purple"} : {color: "magenta"}}>
          CSS dinamico
        </h2>
        {/* Classes dinamicas */}
        <h3 className={redTitle ? "red-title" : "title"}>Isso aqui é flamengo!</h3>

        {/* CSS scoped */}
        <Title/>

      </div>
    </>
  )
}

export default App
