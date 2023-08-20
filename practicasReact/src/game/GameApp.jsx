import {About, Board} from '../components'

import '../css/Game.css'

export const GameApp = () => {
  return (
    <>
        <h1 className='text-center'>Welcome to my App</h1>
        <div className='inicio'>
            <About/>
            <Board />
        </div>
    </>
  )
}
