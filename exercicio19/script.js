let cotacao = parseFloat(prompt("Digite a cotação do dólar:"));
let dolares = parseFloat(prompt("Digite a quantidade de dólares:"));

let reais = cotacao * dolares;
alert("Valor em reais:" + reais.toFixed(2));