//Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu custo é R$300, por quanto devo vendê-la para lucrar 25%?

const custo = (300*100)/60
const lucro = custo * (25/100)

const valorDeVenda = custo + lucro

console.log(valorDeVenda)