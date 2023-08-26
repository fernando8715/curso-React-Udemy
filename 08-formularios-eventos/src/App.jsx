import reactLogo from './assets/react.svg'
import './App.css'
import { Formulario } from './components/Formulario'

function App() {

  return (
    <>
      <div className="logo__react">
          <img src={reactLogo} alt="React logo" />
      </div>
      <Formulario />
    </>
  )
}

export default App
