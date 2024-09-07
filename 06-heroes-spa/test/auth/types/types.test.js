import { types } from "../../../src/auth/types/types";

describe('verificar los valores establecidos para los types de las acciones', () => {

    test('debe regresar los mismos types definidos ', () => {
        
        expect(types).toEqual( {
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    });
});