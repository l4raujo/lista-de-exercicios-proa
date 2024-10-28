let maisNova = Infinity;
let nomeMaisNovo = "";

for (let i = 1; i <= 10; i++) {
  let nomePessoa = prompt("Digite o nome:");
  let idade = parseInt(prompt("Digite a idade:"));

  if (idade < maisNova) {
    maisNova = idade;
    nomeMaisNovo = nomePessoa;
  }
}

alert("Pessoa mais nova: " + nomeMaisNovo);