const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

    //removendo os espaços usando o trim
const removeEspaco = minhaString.trim()
console.log(removeEspaco)

    //imprimindo quant caracteres antes1 e depois2
const caracterString1 = minhaString.length
const caracterString2 = removeEspaco.length

console.log("Quantidade caracter antes", caracterString1)
console.log("Quantidade caracter depois", caracterString2)

    //substituindo os traços por sticioso
const substString = minhaString.replace("________", "“sticioso”")
console.log(substString)