const filtrarPares = require('./05-arrayFilter')

test(
    'Filtras apenas os números pares', () => {
        expect(filtrarPares([1, 2, 3, 4, 5, 6]))
        .toEqual([2, 4, 6])
    }
)

test(
    'Array vazio caso nenhum número seja encontrado', () => {
        expect(filtrarPares([1, 3, 5]))
        .toEqual([])
    }
)

test(
    'Só números pares', () => {
        expect(filtrarPares([2, 4, 6, 8, 10]))
        .toContain(2, 4, 6, 8, 10)
    }
)