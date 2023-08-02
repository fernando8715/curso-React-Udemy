import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ( {value} )=> {

    const [counter, setCounter] = useState( value );
    
    const increm = ()=> {
        setCounter( counter + 1);
    }

    const decrem = ()=> {
        setCounter( counter -1);
    }

    const reset = ()=> {
        setCounter( value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button aria-label='btn-add' onClick={ increm }>+1</button>
            <button onClick={ decrem }>-1</button>
            <button aria-label='btn-reset' onClick={reset}>Reset</button>
        </>
    )
} 

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}