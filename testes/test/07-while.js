function contador(limite) {
    let i = 0;

    let resultado = [];

    while (i < limite) {
        resultado.push(i);

        i++;
    }

    return resultado;
}

module.exports = contador;