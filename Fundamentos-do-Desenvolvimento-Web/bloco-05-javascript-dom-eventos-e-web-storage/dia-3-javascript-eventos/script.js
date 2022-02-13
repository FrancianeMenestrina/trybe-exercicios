function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  let listaDias = document.querySelector("ul#days")
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let index = 0; index < dezDaysList.length; index += 1){
    let elementoLista = document.createElement("li")
    elementoLista.classList.add("day")
    elementoLista.innerText = dezDaysList[index]
  
    if(dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList[index] == 31){
      elementoLista.classList.add("holiday")
    }
    if(dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18 || dezDaysList[index] == 25){
        elementoLista.classList.add("friday")
      }
  
    listaDias.appendChild(elementoLista)
  }
 
  function criaFeriados (param) {
    let buttonsContainer = document.querySelector(".buttons-container")
    let button = document.createElement("button")
    button.setAttribute("id", "btn-holiday")
    button.innerText = param
    buttonsContainer.appendChild(button)

  }

  criaFeriados("Feriados")

//   object.addEventListener("click", myScript);

  
function mudaCorButton (){
    let hollydays = document.querySelectorAll("li.holiday")
    for (let index = 0; index < hollydays.length; index += 1){
        if(hollydays[index].getAttribute("style") == "background-color: pink"){
            hollydays[index].setAttribute("style", "background-color: rgb(238,238,238)")
        } else{
            hollydays[index].setAttribute("style", "background-color: pink")
        }
    }

}

let hollydayButton = document.querySelector("#btn-holiday")
hollydayButton.addEventListener("click", mudaCorButton)