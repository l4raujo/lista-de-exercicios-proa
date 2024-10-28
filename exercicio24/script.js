let soma = 0;

for (let continuar = true; continuar;) {
  let numero = parseInt(prompt("Digite um número:"));
  if (numero < 0) {
    continuar = false; 
  } else {
    soma += numero; 
  }
}

alert("Soma dos números: " + soma);