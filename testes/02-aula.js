function resultado(x){
    if(x >= 7){
        return "Você foi aprovado!";       
    }else if(x >= 5){
        return "Você está de recuperação, sinto muito!";
    }else{
        return "Reprovado, saia da minha sala!";
    }
}

console.log(resultado(1))

module.exports = resultado;