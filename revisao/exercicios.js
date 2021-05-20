//instalar code runner [x]

//1 - Elabore um algoritmo que receba dois números e determine qual é o menor entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

//Criar 2 variaveis que serao as nossas entradas
// Perguntar se o numero 1 é menor que o numero 2 e retorno o vencedor
// Perguntar se o numero 2 é menor que o numero 1 e retorno o vencedor
// Perguntar se os numeros sao iguais e mostrar mensagem 

let num1 = 45
let num2 = 67

if (num1 < num2) {
    console.log(`${num1} é menor`)
} else if (num2 < num1) {
    console.log(`${num2} é menor`)
} else if (num1 === num2) {
    console.log(`Os números são iguais`)
} else {
    console.log(`Digite uma entrada válida`)
}



//2 - Elabore um algoritmo que receba uma string com dia da semana e devolva um número (1-7) correspondente ao dia da semana.



let dia = 'sábado'

switch (dia) {
    case 'domingo':
        console.log(1)
        break
    case 'segunda':
        console.log(2)
        break
    case "terça":
        console.log(3)
        break
    case "quarta":
        console.log(4)
        break
    case "quinta":
        console.log(5)
        break
    case "sexta":
        console.log(6)
        break
    case "sábado":
        console.log(7)
        break
    default: 
        console.log(`Digite uma entrada válida!`)
}




//3 - Elabore um algoritmo que receba uma string com dia da semana (sexta, sábado ou domingo) e devolva uma string: sextou, sabadou ou domingou e se for qualquer outro dia, interpolar e  informar que nao é um dia festivo. 
//criar uma variavel que vai receber a entrada da pessoa usuaria
//criar casos que verificam se a variavel é um dos 3 dias pedidos 
// caso nao seja atendido nenhum dos casos acima imprimir a string interpolando com a entrada

let diaDaSemana = "domingo"

switch (diaDaSemana) {
    case 'sexta':
        console.log('sextouu')
        break
    case 'sabado':
        console.log('sabadouuu')
        break
    case 'domingo':
        console.log('domingou')
        break
    default:
        console.log(`${diaDaSemana} não é um dia festivo`)
}


//4 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (30%) e o valor total a ser pago.

let valorJantar = 500
let taxa = valorJantar * (30/100)
let valorTotal = valorJantar + taxa

console.log(`O valor da taxa: R$ ${taxa} / o valor da conta: R$ ${valorTotal}`)


//5 - Crie um algoritmo que receba o valor da conta e a quantidade de amigas, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago e valor para cada amiga.


let quantidadeDeAmigas = 5
let subtotal = 800
let servico = subtotal * (10/100)

const totalAPagar = subtotal + servico
const totalParaCadaUma = totalAPagar/quantidadeDeAmigas

console.log(`O valor da taxa: R$ ${servico} / o valor para cada: R$ ${totalParaCadaUma}`)

//6 - Crie uma algoritmo que recebe a idade da pessoa e informa se ela pode assistir ao filme com classificação de 14 anos
let idade = 50

if (idade >= 14) {
    console.log('Bom filme!')
} else {
    console.log(`Você não pode pois sua idade é ${idade}`)
}

//7 - Se um processo seletivo para vaga de deva tem 10 algoritmos e serao aprovados quem acertar pelo menos 7 deles, crie um sistema que informe se a candidata foi aprovada ou nao
const acerto = 8

if (acerto >= 7 && acerto <=10) {
    console.log('Parabéns! Está aprovada!')
} else if ( acerto > 10){
    console.log(`Sistema com erro, total de acertos: ${acerto}`)
} else if (acerto < 7){
    console.log(`Tente novamente, seu total de acertos foi: ${acerto}`)
}



//8 - Execute as seguintes tarefas: 1.Declare uma nova variável chamada 'calculadora', e adicione uma instrução somando os valores 10 e 5.

// Incremente 1 à variável 'calculadora', usando o operador de soma abreviado.
// Atribua à variável 'calculadora' seu próprio valor multiplicando por 3, usando o operador de multiplicação abreviado.
// Mostre os valores no console.

let calculadora = 10 + 5 //15
calculadora++ //16
calculadora*=3 //16*3
console.log(calculadora) //48

