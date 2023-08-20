import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './App'
import { GameApp } from './game/GameApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <GameApp />
  </React.StrictMode>,
)
