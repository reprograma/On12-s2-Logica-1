//Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.

let diaDaSemana = "segunda"

if (diaDaSemana === "sabado" || diaDaSemana === "Sábado" || diaDaSemana === "sábado" || diaDaSemana === "Sabado" || diaDaSemana === "SABADO"){
    console.log('Hoje tem')
} else if (diaDaSemana === "segunda") {
    console.log('Hoje tem plantao')
} else if (diaDaSemana === "quarta") {
    console.log('Hoje tem revisao')
} else {
    console.log('Pode estudar por conta e ajudar as coleguinhas')
}