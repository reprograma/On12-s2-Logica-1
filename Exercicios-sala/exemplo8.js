//Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

let sinal = "Verde"

if (sinal === "verde" || sinal === "Verde") {
    console.log("Pode passar!")
} else if (sinal === "amarelo") {
    console.log("Espere um pouco!")
} else if (sinal === "vermelho") {
    console.log("Não passe!")
} else {
    console.log("Sinal com defeito: " + sinal)
}