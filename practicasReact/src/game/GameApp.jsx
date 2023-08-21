import { useState } from 'react'
import {About, Board} from '../components'

import '../css/Game.css'

export const GameApp = () => {

  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquare)=> {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
  };  

 const jumpTo = (nextMove)=> {
  setCurrentMove(nextMove);
 }

 const moves = history.map( (squares, move)=> {
  let description;
  (move > 0)
    ? description = 'Go to move # ' + move
    : description = 'Go to game start'

  return (
    <li key={move}>
      <button className="buton-turn" onClick={()=> jumpTo(move)}>{description}</button>
    </li>
  )
 });


  return (
    <>
        <h1 className='text-center'>Welcome to my App</h1>
        <div className='inicio'>
            <About/>
            <Board 
              squares={currentSquares} 
              xIsNext={xIsNext}
              onPlay={handlePlay}
              />
        </div>
        <div className='game-info'>
               <ol>{moves}</ol>
        </div>
    </>
  )
}
