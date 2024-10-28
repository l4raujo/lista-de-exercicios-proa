let pessoas = 0;

for (let i = 1; i <= 20; i++) {
  let idade = parseInt(prompt("Digite a idade:"));
  if (idade >= 18) {
    pessoas++
  }
}

alert("Pessoas maiores de idade: " + pessoas)