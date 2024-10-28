let numeros = 0

for(let i = 1; i <= 20; i++){
    let numero = parseInt(prompt('Digite os numeros: '))

    if(numero >= 0 && numero <= 100){
        numeros++
    }
}

alert('A quantidade de numeros é: ' + numeros)