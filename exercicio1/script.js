const nomeComida = (nome, comida, comida2, comida3) => {
    const comidaFavorita = `Estas são as comidas favoritas de ${nome}:
    - ${comida}
    - ${comida2}
    - ${comida3}`
    console.log(comidaFavorita)
}

    //informação pro usuario digitar
const nomeUsuario = prompt("Qual seu nome?")
const comida1Usuario = prompt("Qual sua comida favorita?")
const comida2Usuario = prompt("Qual sua segunda comida favorita?")
const comida3Usuario = prompt("Qual sua terceira comida favorita?")
    // chamada da função
nomeComida(nomeUsuario, comida1Usuario, comida2Usuario, comida3Usuario)