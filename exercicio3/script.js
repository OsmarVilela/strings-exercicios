//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
    // verificando se a frase ta com aspas
console.log(frase)

    //trocando as cores
const trocaCores = frase.replace("verde", "rosa").replace("azul", "laranja")

console.log(trocaCores)

    // verificando se inclui verde e laranja
const verificaVerde = trocaCores.includes("verde")
const verificaLaranja = trocaCores.includes("laranja")
console.log("a nova string inclui verde e laranja?", verificaVerde,"e", verificaLaranja)


    // deixando um trecho com letra maiuscula
const letraMaiuscula = frase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
console.log(letraMaiuscula)