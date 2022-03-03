let paleta = document.querySelector (".paleta")
let button = document.querySelector("button")
let frase = document.querySelector("h1")


paleta.addEventListener("click", alerta) 
function alerta () {
    alert("Você me clicou!")
}

button.addEventListener("click", alerta2)
function alerta2 () {
    alert("Vai limpar")
}

frase.addEventListener("copy", copied)
function copied () {
    alert("Foi copiado")
}