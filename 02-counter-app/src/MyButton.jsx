
export const MyButton = ({nombre, fn})=> {
    return (
        <button onClick={fn}> {nombre} </button>
    )
}
