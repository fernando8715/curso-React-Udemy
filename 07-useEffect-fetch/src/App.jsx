import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ListaUsuarios } from './components/ListaUsuarios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header__logo'>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <ListaUsuarios />

    </>
  )
}

export default App
