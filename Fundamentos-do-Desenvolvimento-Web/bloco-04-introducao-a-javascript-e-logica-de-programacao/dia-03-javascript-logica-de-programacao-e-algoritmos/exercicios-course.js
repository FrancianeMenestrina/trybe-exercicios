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

Exercício 3

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
