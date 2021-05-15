//Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, para números divisíveis por 3 irá imprimir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos acima imprime o próprio número.

let entrada = 7

if (entrada % 3 === 0 && entrada % 5 === 0 ) {
    console.log('FizzBuzz')
} else if (entrada % 3 === 0) {
    console.log('Fizz')
} else if (entrada % 5 === 0) {
    console.log('Buzz')
} else {
    console.log(entrada)
}
