let ipi = parseFloat(prompt('Digite a porcentagem do IPI: '))
let valor1 = parseFloat(prompt("Digite o valor unitário da peça 1:"));
let quant1 = parseInt(prompt("Digite a quantidade da peça 1:"));
let valor2 = parseFloat(prompt("Digite o valor unitário da peça 2:"));
let quant2 = parseInt(prompt("Digite a quantidade da peça 2:"));

let total = (valor1 * quant1 + valor2 * quant2) * (ipi / 100 + 1);

alert("Valor total a ser pago:" + total.toFixed(2))