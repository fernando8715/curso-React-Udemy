import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('pruebas en el archivo 06-deses-obj', () => { 
    
    test('la funcion usContext debe retornar un objeto', () => { 
        
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        expect(usContext(persona)).toEqual( {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

     });
 });