let numeros = 0

for (let i = 1; i <= 20; i++) {
    let numero = parseInt(prompt('Digite os numeros: '))
    if(numero >= 8){
        numeros++
    }   
}

alert("Numeros maiores que 8: " + numeros)