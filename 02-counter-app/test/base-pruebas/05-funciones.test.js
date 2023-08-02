import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas con objetor', () => { 
    
    test('getUser debe retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toEqual(user);

     });

     test('getUsuarioActivo retornar un objeto', () => { 
        const nombre = 'fernando';

        const userActivo = getUsuarioActivo(nombre);

        expect(userActivo).toEqual({
            uid: 'ABC567',
            username: 'fernando'
        });

      });
});
