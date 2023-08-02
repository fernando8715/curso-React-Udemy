import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas con tareas asincronas', () => { 
    
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                
                done();
            });        
     })

    test('getHeroeByIdAsync debe de retornar un error cuando no se encuentre el heroe', (done) => { 

        const id = 100;
        getHeroeByIdAsync(id)
            .catch( err => {
                expect(err).toBe(`No se pudo encontrar el héroe con el id: ${id}`);
                
                done();
            });        
     })


 })