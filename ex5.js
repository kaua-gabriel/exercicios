// Imprimir os primeiros 10 números da sequência de Fibonacci.


let fibonacci = [0, 1]; 

for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log('Os primeiros 10 números da sequência de Fibonacci são:');
fibonacci.forEach(num => console.log(num));