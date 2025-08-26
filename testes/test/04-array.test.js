const adicionaElemento = require('./04-array')

test(
    'adicione um número a lista', () => {
        expect(adicionaElemento([1,3],5))
        .toEqual([1, 3 , 5])
    }
)

test(
    'adicione um  a lista', () => {
        expect(adicionaElemento(["jp","gv"],"baiano"))
        .toEqual(["jp", "gv" , "baiano"])
    }
)

test(
    'verifica se tem contem string na lista', () => {
        const alfabeto = [];
        const resultado = adicionaElemento(alfabeto, "c")
        expect(resultado).toContain("c")
    }
)

test(
    'verifica se tem tem uma string igual na lista', () => {
        expect(adicionaElemento([],"c"))
        .toEqual([])
    }
)
