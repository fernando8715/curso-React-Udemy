import PropTypes from 'prop-types';
import { Sumar } from './Sumar';

export const App = ( {title, subtitle, name} )=> {
    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
            <p> {name} </p>
            <Sumar/>
        </>
    )
}

//-----------PROP-TYPES-----------------
// usualmente la configuracion de los componentes se colocan al final, fuera del componente
// ejecurar el comando  yarn add prop-types
// para agregar el paquete Proptypes y poder importarlo en el proyecto
// un valor numerico en una propiedad se hace usando corchetes { }

App.propTypes = {
    title: PropTypes.string.isRequired, // para tipar una propiedad
    subtitle: PropTypes.string,
}

// default Props
// Los default props se ejecutan antes de los proptypes
// en los default props se pueden colocar valores por defecto

App.defaultProps = {
    title: 'Hola Fernando',
    subtitle: 'No hay subtitulo',
    name: 'Fernando Ruiz'
}
