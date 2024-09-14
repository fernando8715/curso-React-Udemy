import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('pruebas en el <PrivateRoute />', () => {

    test('Debe mostrar el children si esta autenticado', () => {
        
        const providerValue = {
            logged: true,
            user: {
                id: 123,
                name: "fernando ruiz"
            }
        }

        Storage.prototype.setItem = jest.fn();
        
        render(
            <AuthContext.Provider value={providerValue} >
                <MemoryRouter initialEntries={["/search"]}>
                    <PrivateRoute>
                        <h1>ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        screen.debug();
        expect(screen.getByText("ruta privada")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search");
    });
});