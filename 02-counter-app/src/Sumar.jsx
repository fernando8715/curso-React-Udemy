import {useState} from 'react';
import { MyButton } from './MyButton';

export const Sumar = ()=> {

    const [counter, setCounter] = useState(0);

    const Add = ()=> {
        setCounter(counter + 5);
    }
    const Rest = ()=> {
        setCounter(counter - 1);
    }
    const Reset = ()=> {
        setCounter(0);
    }

    return (
        <>
            <h2>Funcion de suma</h2>
            <h2> {counter} </h2>
            <MyButton nombre={'Sumar'} fn={Add}/>
            <MyButton nombre={'Restar'} fn={Rest}/>
            <MyButton nombre={'Limpiar'} fn={Reset}/>
        </>
    )
}