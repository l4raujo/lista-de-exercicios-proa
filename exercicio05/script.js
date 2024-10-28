let idade = parseInt(prompt('Digite a sua idade: '))

if(idade < 16){
    alert('Não eleitor')
} else if(idade >= 18 && idade < 65){
    alert('Eleitor obrigatório')
} else{
    alert('Eleitor facultativo')
}