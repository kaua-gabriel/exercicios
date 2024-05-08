// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let numero = parseInt(prompt("Digite um número para ver a tabuada: "))

if (!isNaN(numero)) {
    console.log("Tabuada do " + numero + ":")
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + numero * i)
    }
}
else {
    console.log("Por favor, insira um número válido.")
}