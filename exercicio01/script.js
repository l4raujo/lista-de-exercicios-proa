let prato, sobremesa, bebida;

let caloriasPrato = 0
let caloriasSobremesa = 0
let caloriasBebida = 0

while(true){
    prato = prompt("Escolha o prato:\n1 - Vegetariano (180kcal)\n2 - Peixe (230kcal)\n3 - Frango (250kcal)\n4 - Carne (350kcal)")
    switch(prato){
        case "1":
            caloriasPrato = 180
            break
        case "2":
            caloriasPrato = 230
            break
        case "3":
            caloriasPrato = 250
            break
        case "4": 
            caloriasPrato = 350
            break
        default:
            alert("Opção inválida, digite um número correto de prato")
            continue
    }
    break
}

while(true){
    sobremesa = prompt("Escolha a sua sobremesa:\n1 - Abacaxi (75kcal)\n2 - Sorvete diet (110kcal)\n3 - Mouse diet (170kcal)\n4 - Mouse de chocolate (200kcal)")
    switch(sobremesa){
        case "1":
            caloriasSobremesa = 75
            break
        case "2":
            caloriasSobremesa = 110
            break
        case "3":
            caloriasSobremesa = 170
            break
        case "4": 
            caloriasSobremesa = 200
            break
        default:
            alert("Opção inválida, digite um número correto de prato")
            continue
    }
    break

}

while(true){
    bebida = prompt("Escolha a sua sobremesa:\n1 - Chá (20kcal)\n2 - Suco de laranja (70kcal)\n3 - Suco de Melão (100kcal)\n4 - Refrigerante diet (65kcal)")
    switch(bebida){
        case "1":
            caloriasBebida = 20
            break
        case "2":
            caloriasBebida = 70
            break
        case "3":
            caloriasBebida = 100
            break
        case "4": 
            caloriasBebida = 65
            break
        default:
            alert("Opção inválida, digite um número correto de prato")
            continue
    }
    break
}

let caloriasTotal = caloriasPrato + caloriasSobremesa + caloriasBebida

alert('A quantidade total presente na refeição é: ' + caloriasTotal + " calorias")