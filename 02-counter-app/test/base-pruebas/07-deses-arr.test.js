import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas al archivo 07-deses-arr', () => { 
    
    test('la funcion retorna arreglo debe retornar [ABC, 123]', () => { 
        
        const [letters, number] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(number).toBe(123);

        expect(retornaArreglo()).toEqual(
            ['ABC', 123]
        )

     })
 })