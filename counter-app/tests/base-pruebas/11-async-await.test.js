import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('pruebas en 11-async-await', () => {

    test('getImagen debe retornar la url de la img', async() => {
        
        const url = await getImagen();
        expect(typeof url).toBe('string')
    });
});