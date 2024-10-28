let soma = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt("Digite um número:"));
  soma += numero;
}

alert("Soma dos 10 números é igual a: " + soma);