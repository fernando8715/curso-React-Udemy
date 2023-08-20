import { useState } from "react"

export const Square = ({value, onSquareClick}) => {

  return (
    <>
        <button className="buton"
          onClick={onSquareClick}
          value={value}>
            {value}
        </button>
    </>
  )
}
