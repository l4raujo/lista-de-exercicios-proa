let primeiroNumero = parseInt(prompt('Digite o valor do primeiro número: '))
let segundoNumero = parseInt(prompt('Digite o valor do segundo número: '))
let terceiroNumero = parseInt(prompt('Digite o valor para o terceiro número: '))

let maior
let medio 
let menor 

if(primeiroNumero >= segundoNumero && primeiroNumero>= terceiroNumero){
    maior = primeiroNumero

    if(segundoNumero >= terceiroNumero){
        medio = segundoNumero
        menor = terceiroNumero

    } else {
        medio = terceiroNumero
        menor = segundoNumero
    }
} else if(segundoNumero >= primeiroNumero && segundoNumero >= terceiroNumero){
    maior = segundoNumero

    if(primeiroNumero >= terceiroNumero){
        medio = primeiroNumero
        menor = terceiroNumero
    } else {
        medio = terceiroNumero
        menor = primeiroNumero
    }
} else {
    maior = terceiroNumero

    if(primeiroNumero >= segundoNumero){
        medio = primeiroNumero 
        menor = segundoNumero
    } else {
        medio = segundoNumero
        menor = primeiroNumero
    }

    alert(`Valores em ordem decrescente: ${maior}, ${medio}, ${menor}`)
}