import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('pruebas al componente CounterApp', () => { 
    
    const inicial = 10;
    const prueba = 100;

    test('should hacer el match con el snapshot', () => { 
        
        const {container} = render(<CounterApp value={inicial} />)
        expect(container).toMatchSnapshot();
     });

     test('should show initial value = 100', () => { 
        
        render(<CounterApp value={prueba}/>);
        expect(screen.getByText(100)).toBeTruthy();
      });

    test('should incrementar con el boton +1', () => { 
        
        render(<CounterApp value={inicial}/>)
        fireEvent.click(screen.getByText('+1'));

        expect(screen.getByText('11')).toBeTruthy();
    });

    test('should decrementar con el boton -1', () => { 
        
        render(<CounterApp value={inicial}/>);
        fireEvent.click(screen.getByText('-1'));
        // screen.debug();
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('should volver al valor inicial con el boton reset', () => { 
        render(<CounterApp value={prueba}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

        expect(screen.getByText('100')).toBeTruthy();

     })
 })