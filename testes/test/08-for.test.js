const somacomFor = require('./08-for');

test('retorna a soma da lista', () => {
    const numeros = [1, 2, 3, 4];
    expect(somacomFor(numeros)).toBe(10);
})