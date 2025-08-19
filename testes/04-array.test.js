const adicionaElemento = require('./04-array')

test(
    'adicione um número a lista', () => {
        expect(adicionaElemento([1])).toEqual([1])
    }
)