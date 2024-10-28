let saldoMedio = parseInt(prompt('Digite o valor de seu saldo: '))

if(saldoMedio >= 0 && saldoMedio <= 500){
    alert('O valor de seu saldo medio corresponde: ' +  saldoMedio)

} else if(saldoMedio >= 501 && saldoMedio <= 1000) {

    let valorTotal = saldoMedio + saldoMedio * 0.30
    alert('O valor de seu saldo médio corresponde: ' + valorTotal)

} else if(saldoMedio >= 1001 && saldoMedio <= 3000) {

    let valorTotal = saldoMedio + saldoMedio * 0.40
    alert('O valor de seu saldo médio corresponde: ' + valorTotal)
}