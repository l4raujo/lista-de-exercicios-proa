let parte_1 = 0
let parte_2 = 0
let parte_3 = 0

for (let i = 1; i <= 20; i++) {
  let numero = parseInt(prompt("Digite um número:"));

  if (numero >= 0 && numero <= 100) {
    parte_1++;
  } else if (numero >= 101 && numero <= 200) {
    parte_2++;
  } else if (numero > 200) {
    parte_3++;
  }
}

console.log("Entre 0 e 100: " + parte_1 + "Entre 101 e 200: " + parte_2 + "Maiores de 200: " + parte_3);