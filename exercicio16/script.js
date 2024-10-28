let soma = 0

for (let i = 1; i <= 20; i++) {
    let idade = parseInt(prompt('Digite a idade das pessoas: '))
    soma += idade
}

alert('A media das idades das 20 pessoas é igual á: ' + soma / 20)