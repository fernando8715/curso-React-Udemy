import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('pruebas en 07-deses-arr', () => {

    test('debe retorna un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();

        // expect(letters).toBe('ABC');
        // expect(numbers).toBe(123);
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        expect(letters).toEqual(expect.any(String)); // expect.any() para validar que es de un tipo de dato sin importar el dato.
        expect(numbers).toEqual(expect.any(Number)); 
    });
});