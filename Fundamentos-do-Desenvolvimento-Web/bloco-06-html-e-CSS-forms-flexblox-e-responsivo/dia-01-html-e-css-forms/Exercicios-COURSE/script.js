const buttonSubmit = document.querySelector("#botaoSubmit")
const dadosFormsAll = document.querySelector("#myform")

function insereValorDoForms(event){
    event.preventDefault();
    for (let index = 0; index < document.querySelector("#myform").elements.length; index++) {
        console.log(document.querySelector("#myform").elements[index].value)
        let p = document.createElement("p")
        p.innerText = document.querySelector("#myform").elements[index].id + " " + document.querySelector("#myform").elements[index].value
        document.querySelector("#imputmyform").appendChild(p)
        
    }

}
buttonSubmit.addEventListener("click", insereValorDoForms)