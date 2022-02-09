// Exercício 1
function changeText () {
    let paragraph = document.getElementsByTagName("p")[1];
    paragraph.innerText = "Vou pra Itália!"
    console.log(paragraph);
}

// Exercicio 2
changeText();

function changeColorBg () {
    let mainContent = document.getElementsByClassName("main-content")[0].style.background = "rgb(76, 164, 109)"
}
changeColorBg()

//Exercício 3
changeColor ();
function changeColor () {
    let centerContent = document.getElementsByClassName("center-content")[0].style.background = "white"
}
changeColor();

//Exercício 4
changeTag ();
function changeTag () {
    let h1text = document.getElementsByTagName("h1")[0]
    h1text.innerHTML = "Exercício 5.1 - JavaScript"
}
changeColor();