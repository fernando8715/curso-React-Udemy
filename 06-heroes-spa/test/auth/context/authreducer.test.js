import { authReducer } from "../../../src/auth/context";
import { types } from "../../../src/auth/types/types";


describe('pruebas en authreducer', () => {

    test('verificar el retorno del estado por defecto', () => {
    
        const state = authReducer({logged: false}, {} )

        expect(state).toEqual({logged: false})
    });

    test('verificar que llame la accion de login y establezca el usuario', () => {
        
        const action = {
            type : types.login,
            payload : {
                name: 'fernando',
                id: 123
            }

        }
        const state = authReducer({logged: false}, action);
        console.log(state);
        

        expect(state).toEqual({
            logged: true,
            user: {
                name: 'fernando',
                id: 123
            },
        })
    });

    test('verificar llame la accion logout, elimine el usuario y logged:false', () => { 
        
        const action = {
            type : types.logout
        }

        const state = {
            logged: true,
            user: {
                name: 'fernando',
                id: 123
            },
        }
        const newState = authReducer(state, action);

        expect(newState).toEqual(
            {
                logged: false,
            }
        )

     })
});