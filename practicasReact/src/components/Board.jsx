import { Square } from "./Square"
import {calculateWin} from '../helpers/calculateWin'
import '../css/Game.css'

export const Board = ({squares, xIsNext, onPlay}) => {

  const winner = calculateWin(squares);
  
  let status;
  
  if(winner) {
    status = 'Winner: ' + winner
  }else {
    status = `Next player: ${(xIsNext) ? 'X' : 'O'}`
  };
  
  const handleClick = (i)=> {

    if (squares[i] || calculateWin(squares)) return;

    const nextSquare = squares.slice();

    (xIsNext) 
      ? nextSquare[i] = 'X'
      : nextSquare[i] = 'O';
    onPlay(nextSquare);   
  }


  return (
    <div >
        <h3 className="text-center title">Tic-Tac-Toe Game</h3>
        <h4 className="text-center">{status}</h4>
        <div className="board">
          <div>
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
          </div>
          <div>
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
          </div>
          <div>
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
          </div>

        </div>
    </div>
  )
}
