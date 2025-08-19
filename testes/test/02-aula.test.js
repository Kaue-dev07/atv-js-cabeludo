const x = require('./aula-02')

test(
    'teste de if e else', () => {
        expect(x(5)).toBe("Você está de recuperação, sinto muito!")
    }
)

test(
    'teste de if e else', () => {
        expect(x(7)).toBe("Você foi aprovado!")
    }
)

test(
    'teste de if e else', () => {
        expect(x(2)).toBe("Reprovado, saia da minha sala!")
    }
)
