import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes";

describe('pruebas a la data de heroes', () => { 
    
    test('getHeroeById debe retornar el heroe con el id', () => { 
        
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
     })

    test('verificar cuando no hay heroe con el Id ingresado en getHeroeById ', () => { 

        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();
    })

    test('pruebas para obtener todos los heroes de "DC" en getHeroesByOwner', () => { 
        
        const owner = 'DC'
        const heroe = getHeroesByOwner(owner);

        expect( heroe ).toEqual( heroes.filter( (heroe) =>  heroe.owner === owner));
     })

     test('pruebas para obtener todos los owner de "Marvel" en getHeroesByOwner', () => { 
        
        const owner = 'Marvel'
        const heroe = getHeroesByOwner(owner);

        expect( heroe ).toHaveLength(2);
        expect( heroe.length).toBe(2);
     })

 })