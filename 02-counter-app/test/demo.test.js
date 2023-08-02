
describe('Pruebas en el Demo Component', ()=>{
    
    test('Esta prueba no debe fallar', () => { 
    
        const message1 = 'Hola Fernando';

        const message2 = message1.trim();

        expect(message1).toBe(message2);
    })

})


describe('mis primeras pruebas al <demo component>', () => { 
    test('should dar como resultado 2', () => { 
        const message3 = 'Hola A';

        expect(message3).toBe('Hola A')
     })
 })