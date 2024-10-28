let nome = prompt("Digite o nome do vendedor:");
let salarioFixo = parseFloat(prompt("Digite o salário fixo:"));
let vendas = parseFloat(prompt("Digite o total de vendas no mês:"));

let comissao = vendas * 0.15;
let salarioFinal = salarioFixo + comissao;

alert("Nome:" + nome);
alert("Salário Fixo:" + salarioFixo);
alert("Salário Final:" + salarioFinal.toFixed(2));