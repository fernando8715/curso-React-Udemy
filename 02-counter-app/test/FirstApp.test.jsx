import { render, screen } from "@testing-library/react"
import { App } from "../src/FirstApp"

describe('pruebas en el componente <firstApp>', () => { 

    const title = 'Hola Fernando';

    
    test('debe hacer un match con el snapshot', () => { 
        
        // el render es una funcion que renderiza el componente en memoria
        const {container} = render( <App title={ title} />)
        // console.log(container);
        expect(container).toMatchSnapshot();
     })

     test('should show title in a h1', () => { 
        
        const {container, getByText} = render( <App title={ title} />)

        expect(getByText(title)).toBeTruthy();

      })

      test('should show message "Hola Fernando"', () => { 

            render(<App title={title}/>);
            // screen.debug();
            expect(screen.getByText(title)).toBeTruthy();
       })

       test('should show title in h1', () => { 
        
            render(<App title={title}/>);
            expect(screen.getByRole('heading', {level:1}).innerHTML).toBe(title);

        })
 })