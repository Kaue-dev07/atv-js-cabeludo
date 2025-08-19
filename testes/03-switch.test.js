const diaDaSemana = require('./03-switch');

test(
    'testando dia das semana', () => {
        expect(diaDaSemana(1)).toBe("Domingo");
        expect(diaDaSemana(2)).toBe("Segunda-feira");
        expect(diaDaSemana(3)).toBe("Terça-feira");
        expect(diaDaSemana(4)).toBe("Quarta-feira");
        expect(diaDaSemana(5)).toBe("Quinta-feira");
        expect(diaDaSemana(6)).toBe("Sexta-feira");
        expect(diaDaSemana(7)).toBe("Sábado");
    }
)

test(
    'testando dia das semana', () => {
        expect(diaDaSemana(90)).toBe("Número inválido, um número de 1 a 7 bostinha");
        expect(diaDaSemana("abcdario")).toBe("Número inválido, um número de 1 a 7 bostinha");
    }
)