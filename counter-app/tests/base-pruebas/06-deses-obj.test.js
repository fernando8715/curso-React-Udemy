import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('pruebas en 06-deses-obj', () => {
    test('usContext retorna un obj', () => {

        const clave = 'Fernando';
        const edad = 35;
        const ubicacion = usContext(clave, edad);

        expect(ubicacion).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    })
})