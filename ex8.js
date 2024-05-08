// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.


let idade;

do {
  idade = prompt('Por favor, insira sua idade:');
  idade = parseInt(idade); 
  
  if (idade < 18) {
    console.log("Você ainda não tem 18 anos. Por favor, insira novamente sua idade.");
  }
} 
while (idade < 18);
console.log("Você tem 18 anos ou mais. Bem-vindo!");