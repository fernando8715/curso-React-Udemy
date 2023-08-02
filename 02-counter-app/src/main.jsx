import React from 'react'
import ReactDOM from 'react-dom/client';  //
import { App } from './FirstApp';
// import { Hello } from './HelloWorld';
import { CounterApp} from './CounterApp';
// import { Sumar } from './Sumar';

import './styles.css';


ReactDOM.createRoot(document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value = {100} />
        {/* <Sumar value = {0} /> */}
        {/* <App title={'Aprendiendo compontes'} subtitle={'Agregando componentes'}/> */}
    </React.StrictMode>
)