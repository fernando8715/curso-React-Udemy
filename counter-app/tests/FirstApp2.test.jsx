import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('pruebas en FirstApp', () => {
  const title = 'Soy Fernando';
  const subtitle = 'Ingeniero informatico y desarrollador web';

  test('should match with snapshot', () => {

    const { container } = render(<FirstApp title={title} />)
    expect(container).toMatchSnapshot();
  })
  
  test('should show message "Soy Fernando"', () => {
    
    render(<FirstApp title={title} />);
    expect( screen.getByText(title) ).toBeTruthy();
  });

  test('show title in h1', () => {
    render(<FirstApp title={title}/>);
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
  });

  test('show subtitle send by props', () => {
    
    render(<FirstApp title={title} subTitle={subtitle}/>);
    expect(screen.getAllByText(subtitle).length).toBe(2);
        
  });

})