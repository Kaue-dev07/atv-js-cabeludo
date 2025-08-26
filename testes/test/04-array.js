function adicionaElemento(arr, elemento){
    if( elemento === null){
        return null
    }
    arr.push(elemento);

    return arr;
}

module.exports = adicionaElemento;
