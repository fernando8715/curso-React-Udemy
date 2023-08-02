import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('realizando pruebas a tareas asincronas con async - await', () => { 
    
    test('debe retornar la url de la imagen', async() => { 
        
        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');
     })
 })