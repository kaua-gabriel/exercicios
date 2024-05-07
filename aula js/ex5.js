// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.
// Solicita ao usuário que insira três números


let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");
let num3 = prompt("Digite o terceiro número:");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if (num1 < num2 && num2 < num3) {
    console.log("Os números estão em ordem crescente!");
} 
else {
    console.log("Os números NÃO estão em ordem crescente.");
}