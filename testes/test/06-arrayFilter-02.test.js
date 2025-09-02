const filtrarMaiores = require('./06-arrayFilter-02')

test(
    'Filtrar maiores de 18 anos', () => {
        const entrada = [
            { nome: 'Kauê', idade: 17},
            { nome: 'Juliana', idade: 19},
            { nome: 'Julia', idade: 25}
        ];
        const esperado = [
            { nome: 'Juliana', idade: 19},
            { nome: 'Julia', idade: 25}
        ]

        expect(filtrarMaiores(entrada)).toEqual(esperado)
    }
)

test(
    'Filtrar menores de 18 anos', () => {
        const entrada = [
            { nome: 'Kauê', idade: 16},          
            { nome: 'ana', idade: 18},
            { nome: 'joão', idade: 19}
        ];

        const esperado = [
            { nome: 'Kauê', idade: 16}
        ]
    }
)

