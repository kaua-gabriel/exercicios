// Exercício 2: Verificação de dia da 
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.

let dia = prompt("ola, digite um numero de 1 a 7:")
switch (dia) {
    default: 
    console.log("Deve ser um número de 1 a 7.");
        break;

    case "1":
        dia = "segunda";
        console.log("Segunda-Feira")
        break;

    case "2":
        dia = "Terça";
        console.log("Terça-Feira")
        break;

    case "3":
        dia = "Quarta";
        console.log("Quarta-Feira")
        break;

    case "4":
        dia = "Quinta";
        console.log("Quinta-Feira")
        break;

    case "5":
        dia = "Sexta";
        console.log("Sexta-Feira")
        break;

    case "6":
        dia = "Sábado";
        console.log("Sábado")
        break;

    case "7":
        dia = "Domingo";
        console.log("Domingo")
        break;
}