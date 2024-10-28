let numero = parseInt(prompt('Digite um número: '))

if(numero % 10 === 0){
    alert('Esse número é divisivel por dez')
    
} else if (numero % 5 === 0){
    alert('Esse número é divisível por cinco')
    
} else if (numero % 2 === 0){
    alert('Esse número é divisível por dois')
    
} else {
    alert('Esse número não é divisível por dois, por cinco e nem  por 10.')
}