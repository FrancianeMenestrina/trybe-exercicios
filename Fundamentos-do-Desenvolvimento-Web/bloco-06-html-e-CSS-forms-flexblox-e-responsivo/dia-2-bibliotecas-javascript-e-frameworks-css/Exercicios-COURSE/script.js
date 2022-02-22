const buttonSubmit = document.querySelector("#botaoSubmit")
const dadosFormsAll = document.querySelector("#myform")

document.querySelector("#data").DatePickerX.init({
    format: 'dd/mm/yyyy',
    minDate: new Date(2022, 0, 2),
    maxDate: new Date(2024, 8, 30),
});

const validate = new window.JustValidate('#myform');

const validation = new JustValidate('#myform');
validation
.addField('#inputName', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#inputEmail', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);

// function insereValorDoForms(event){
//     event.preventDefault();
//     for (let index = 0; index < document.querySelector("#myform").elements.length; index++) {
//         console.log(document.querySelector("#myform").elements[index].value)
//         let p = document.createElement("p")
//         p.innerText = document.querySelector("#myform").elements[index].id + " " + document.querySelector("#myform").elements[index].value
//         document.querySelector("#imputmyform").appendChild(p)
        
//     }

// }
// buttonSubmit.addEventListener("click", insereValorDoForms)