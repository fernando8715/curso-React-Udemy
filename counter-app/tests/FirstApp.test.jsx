import { getByText, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('pruebas en FirstApp', () => { 
    test('should make match with snapshot', () => { 
        
        const title = 'Hola Soy Fernando'
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);
        
        // expect(container).toMatchSnapshot();
        expect( getByText(title) ).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title) 
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title)

     });

     test('should show subtitle send by props', () => { 

        const title = 'Hola Soy Fernando'
        const subtitle = 'Soy ingeniero informatico y desarrollador web';
        const {getAllByText} = render(<FirstApp title={title} subTitle={subtitle}/>);

        expect(getAllByText(subtitle).length).toBe(2); 
      })
 })