// Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?

let custo = 3000
const desconto = custo * (25/100)

const valorDeVenda = custo - desconto

console.log(valorDeVenda, desconto)