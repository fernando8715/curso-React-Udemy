import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp', () => {

    test('getHeroeById retorna el heroe por su ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });

    test('getHeroesByOwner debe retornar heroes de DC', () => {

        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        expect(heroe).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        expect(heroe).toEqual(heroes.filter(heroe => heroe.owner === owner)); 
        expect(heroe.length).toBe(3);
    });

    test('getHeroesByOwner debe retornar heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        expect(heroe).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
        expect(heroe).toEqual(heroes.filter(heroe => heroe.owner === owner));
        expect(heroe.length).toBe(2);
    });
});