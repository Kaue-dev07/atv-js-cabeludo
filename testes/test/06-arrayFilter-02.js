function filtrarMaiores(pessoas){
    return pessoas.filter(pessoas => pessoas.idade >= 18);
} 

module.exports = filtrarMaiores;