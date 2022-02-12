// Exercício 1
// let fatorial = 10;
// let resultado = 1;
// for (let index = fatorial; index > 1; index -= 1) {
//     resultado = resultado * index;
// }
// console.log(resultado)


// Exercício 2
let palavra = 'tryber';
let invertePalavra = '';

for (let index = 0; index < palavra.length; index += 1) {
  invertePalavra = invertePalavra + palavra[palavra.length - 1 - index];
}

console.log(invertePalavra);

// Exercício 3
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}

console.log(maiorPalavra);
console.log(menorPalavra);

// Exercício 4
// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let array = []
let arrayprimos = []
for (let index = 0; index <= 50; index += 1){
    array.push(index)
}

for (let index = 0; index < array.length; index += 1) {
  let numero = array[index]
  let count = 0;

  for (let index2 = 0; index2 < array.length; index2 +=1) {
    if (numero % array[index2] === 0){
      count = count + 1
    }
  }

  if (count == 2){
    // é primo
    arrayprimos.push(numero)
  }
}
let ehmaiornumero = 0
for (let index = 0; index < arrayprimos.length; index += 1){
  let numero = arrayprimos[index]  
  for (let index2 = 0; index2 < arrayprimos.length; index2 += 1){
    if (numero > arrayprimos[index2]){
      ehmaiornumero = numero
    }
  }
}
console.log(ehmaiornumero + " é o maior número primo");