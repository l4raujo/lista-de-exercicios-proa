let salarioMinimo = 1212;
let salarioUsuario = parseFloat(prompt("Digite o valor do salário do usuário:"));

let quantidade = salarioUsuario / salarioMinimo;
alert("Quantidade de salários mínimos:" + quantidade.toFixed(2));