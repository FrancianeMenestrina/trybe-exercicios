
//  <!-- /*
//  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//  - document.getElementById()
//  - document.getElementsByClassName()
//  - document.getElementsByTagName()






//  */ -->
// Exercício 1
// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeText () {
    let paragraph = document.getElementsByTagName("p")[1];
    paragraph.innerText = "Vou pra Itália!"
    console.log(paragraph);
}
changeText();



// Exercicio 2
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColorBg () {
    let mainContent = document.getElementsByClassName("main-content")[0];
    mainContent.style.background = "rgb(76, 164, 109)";
}
changeColorBg();



//Exercício 3
// Crie uma função que mude a cor do quadrado vermelho para branco.
function changeColor () {
    let centerContent = document.getElementsByClassName("center-content")[0];
    centerContent.style.background = "white";
}
changeColor();


//Exercício 4
// Crie uma função que corrija o texto da tag <h1>.
function changeTag () {
    let h1text = document.getElementsByTagName("h1")[0];
    h1text.innerHTML = "Exercício 5.1 - JavaScript";
}
changeTag ();


//Exercício 5
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function changeParagrafo() {
    let pText = document.getElementsByTagName("p")[0];
    pText.innerHTML = pText.innerHTML.toUpperCase();
}
changeParagrafo();


//Exercício 6
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function exibParagrafo () {
    let paragrafo = document.getElementsByTagName("p");
   for(let index = 0; index < paragrafo.length; index += 1){
        console.log(paragrafo[index].innerHTML)
   }
}
  exibParagrafo();

