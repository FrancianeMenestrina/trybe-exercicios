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