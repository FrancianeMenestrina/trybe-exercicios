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
