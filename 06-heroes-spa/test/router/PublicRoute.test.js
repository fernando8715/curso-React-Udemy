import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";

describe('pruebas en el componente PublicRoute', () => {

    test('debe mostrar el children si no esta autenticado', () => {
        
        const providerValue = {logged:false}
        
        render(<AuthContext.Provider value = {providerValue}>
            <PublicRoute >
                <h1>ruta publica</h1>
            </PublicRoute >
        </AuthContext.Provider>
        )

        // screen.debug();
        expect(screen.getByText('ruta publica')).toBeTruthy();
    });

    test('debe permitir la navegación si esta autenticado', () => {
         
    });
});