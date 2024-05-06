// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let n3 = parseFloat(prompt("Coloque a nota: "))
let n4 = parseFloat(prompt("Coloque a nota: "))

media = ( n1 + n2 + n3 + n4) / 4 

console.log (media)

if (media >= 7) {
    alert("Aprovado");

} else if (media >= 5){
    alert("Recuperação"); 
} else {
    alert ("Reprovado")
}