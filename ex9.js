// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.


let numero = prompt('Digite um número para começar a contagem regressiva:');

numero = parseInt(numero);

if (!isNaN(numero)) {
  console.log('Iniciando a contagem regressiva:');
  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
  console.log('Contagem regressiva concluída!');
} else {
  console.log('Por favor, insira um número válido.');
}

// let numero = parseInt(prompt('Digite um número para começar a contagem regressiva:'))

// console.log ("a contagem regressiva está começando em: " + numero)

// while(numero >= 8){
//   console.log(numero);
// numero--;
// }

// console.log ("contagem regrssiva finalizada")