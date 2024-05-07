// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.

let n = prompt("Digite um numero");
let total = n % 2;
if (total == 0) {
    console.log("PAR")
} else {
    console.log("IMPAR")
}