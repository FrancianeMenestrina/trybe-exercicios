
// 1-Teste se o retorno de sum(4, 5) é 9
// const sum = require('./sum2');

// test('Soma de 4 e 5 resulta em 9', () => {
//     expect(sum(4, 5)).toBe(9);
// });

// ou 
const {sum, myRemove} = require('./sum2');

describe('Requisito 1', () => {
    it('Soma de 4 e 5 resulta em 9', ()  => {
        expect(sum(4, 5)).toBe(9); 
})
});

// 2-Teste se o retorno de sum(0, 0) é 0

describe('Requisito 2', () => {
    it('Soma de 0 e 0 resulta em 0', () => {
        expect(sum(0, 0)).toBe(0); 
})
});

// 3-Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
describe('Requisito 3', () => {
    it('Soma de 4 e "5" exibe Erro', () => {
        expect(() => {sum(4, "5") }).toThrow('parameters must be numbers'); 
})
})

// 4-Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
describe('Requisito 4', () => {
    it('Testa se a mensagem de erro é parameters must be numbers', () => {
        expect (() => {sum (4, "5") }).toThrowError(new Error('parameters must be numbers'));
    })
});

// Parte 2
// 1-Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    describe('Requisito 2.1', () => {
        it('Testa se o array é igual e retira o item elencado', () => {
            expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
        })
    });





 