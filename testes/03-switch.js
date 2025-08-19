const prompt = require('prompt-sync')(); //regra basica pra fazer o prompt funcionar

const numero = Number(prompt("Digite seu número: ")) //o que digitar aqui, voce armazena na variavel "numero"

function diaDaSemana(numero){
    let diaSemana;

    switch(numero) {
        case 1: 
            diaSemana = "Domingo";
            break;
        case 2: 
            diaSemana = "Segunda-feira";
            break;
        case 3: 
            diaSemana = "Terça-feira";
            break;
        case 4:
            diaSemana = "Quarta-feira";
            break;
        case 5:
            diaSemana = "Quinta-feira";
            break;
        case 6:
            diaSemana = "Sexta-feira";
            break;
        case 7:
            diaSemana = "Sábado";
            break;

        default:
            return "Número inválido, um número de 1 a 7 bostinha"
    }

   return diaSemana;

}

console.log("Você digitou", numero , " que é " , diaDaSemana(numero))

module.exports = diaDaSemana;