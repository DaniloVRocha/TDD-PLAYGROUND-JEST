import getFactorial from './factorial'

describe('Caminho Feliz', () =>{

    
    test('getFactorial deve ser uma função', () => {
        expect(getFactorial).toBeInstanceOf(Function);
    })
    
    test('getFatorial(3) deve retornar 6', ()=>{
        const atual = getFactorial(3)
        const esperado = 6
        
        expect(atual).toBe(esperado);
    })
    
    test('getFatorial(4) deve retornar 24', ()=>{
        const atual = getFactorial(4);
        const esperado = 24;
        
        expect(atual).toBe(esperado);
    })
})

describe('Caminho Não Feliz', () =>{
    test('getFactorial() mostre um TypeError', () => {
        try{
            getFactorial();
        }catch(error){
            expect(error.name).toBe('TypeError');
        }
    })

    const typeErrorMessage = "getFactorial precisa receber um parametro do tipo NUMBER";

    test(`getFactorial() mostre um TypeError com a mensagem ${typeErrorMessage}`, () => {
        try{
            getFactorial();
        }catch(error){
            expect(error.message).toBe(typeErrorMessage);
        }
    })

    test(`getFactorial(0) retorne o numero 1 `, () => {
        const atual = getFactorial(0);
        const esperado = 1;
         expect(atual).toBe(esperado);
    })

   
    test('getFactorial(-1) mostre um RangeError', () => {
        try{
            getFactorial();
        }catch(error){
            expect(error.name).toBe('TypeError');
        }
    })

    const rangeErrorMessage = "getFactorial precisa receber um numero entre 0 e 20";

    test(`getFactorial(-1) mostre a mensagem ${rangeErrorMessage}`, () => {
        try{
            getFactorial(-1);
        }catch(error){
            expect(error.message).toBe(rangeErrorMessage);
        }
    })
})