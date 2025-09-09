const contador = require('./07-while')

test('Função contador', () => {
    expect(contador(0)).toEqual([])
})

test('Teste com números validos', () => {
    expect(contador(2)).toEqual([0, 1])

})