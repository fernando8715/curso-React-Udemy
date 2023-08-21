
export const Square = ({value, onSquareClick}) => {

  return (
      <button className="buton"
        onClick={onSquareClick}>
          {value}
      </button>
  );
}
