//Exercício 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
// console.log(numbers[index]);
// }

// Exercício 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1){
//   soma += numbers[index];
// }
//     console.log(soma);


//Exercício 3

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1){
//    soma += numbers[index];
// }
//     let media = soma / numbers.length;
//     console.log(media);

//Exercício 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1){
//    soma += numbers[index];
// }
//     let media = soma / numbers.length;
//     console.log(media);

//    if (media <=20){
//       console.log("valor menor ou igual 20");
//    } 
//    else {
//       console.log("valor maior que 20");
//    }

// Exercício 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = numbers [0]

// for (let index = 0; index < numbers.length; index += 1){

// if (numbers[index] > maior) {
//    maior = numbers[index];
//  }
// }
// console.log(maior)

// Exercício 6

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let contador = 0

// for (let index = 0; index < numbers.length; index += 1){

// if (numbers[index] % 2 !== 0) {
//    contador += 1
//  }
// }
// if (contador === 0){
//    console.log ("Nenhum Valor Ímpar")
// } else {
//    console.log (contador)
// }

// Exercício 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menor = numbers[0]

// for (let index = 0; index < numbers.length; index += 1){
//     if(numbers[index] < menor) {
//         menor = numbers[index];
//     }
// }
// console.log(menor + " é o menor número!");

// Exercício 8

// let listaNum = [];

// for (let index = 1; index <= 25; index += 1){
//     listaNum.push(index);
// }
// console.log(listaNum);

// Exercício 9
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// let divisao = [];

// for (let index = 1; index <= numbers.length; index += 1){
//     divisao.push(index/2);}
// console.log(divisao);

// Bônus - Exercicio 1 - Bônus feito com base aqui:
http://devfuria.com.br/logica-de-programacao/exemplos-na-linguagem-c-do-algoritmo-bubble-sort/

// var vetor = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (k = 1; k < vetor.length; k++) {
//     for (j = 0; j < vetor.length - k; j++) {     
//         if (vetor[j] > vetor[j + 1]) {
//             aux          = vetor[j];
//             vetor[j]     = vetor[j + 1];
//             vetor[j + 1] = aux;
//         }
//     }
// };
// console.log(vetor);

// Bônus Exercício 2
// var vetor = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (k = 1; k < vetor.length; k++) {
//        for (j = 0; j < k; j++) {
//            if (vetor[k] > vetor[j]) {
//                aux          = vetor[k];
//                vetor[k]     = vetor[j];
//                vetor[j] = aux;
//            }
//        }
// };
// console.log(vetor);

Bônus Exercício 3
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let multiplicados = [];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (index + 1 < numbers.length) {
//       multiplicados.push(numbers[index] * numbers[index + 1]);}
//       else {
//           multiplicados.push(numbers[index] * 2);}
//   }
    

// console.log(numbers); 
// console.log(multiplicados);