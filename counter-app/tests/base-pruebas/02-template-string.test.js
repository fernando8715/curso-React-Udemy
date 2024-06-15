import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas en 02-template-string', () => { 
    test('getSaludo debe retornar Hola fernando', ()=>{
        const name = 'Fernando';
        const saludo = getSaludo(name);

        expect(saludo).toBe(`Hola ${name}`);
    });
 })