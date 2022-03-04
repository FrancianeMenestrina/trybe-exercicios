// // function testingScope(escopo) {
// //     if (escopo === true) {
// //       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// //       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
// //       console.log(ifScope); 
// //     } else {
// //       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
// //       console.log(elseScope);
// //     }
// //     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// //   }

// //   testingScope(true);

// // Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// // Modifique a estrutura da função para que ela seja uma arrow function .
// // Modifique as concatenações para template literals .
// // Copie o código abaixo.

// const testingScope = escopo => { 
//     if (escopo === true) { 
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;  
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

// //   Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// //   Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// //   Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// //   Copie o código abaixo.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// }

// const sortedArray = sortOddsAndEvens();
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// // Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . 
// // Spoiler: É possível realizar uma função que ordene qualquer array de números.
  
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// oddsAndEvens.sort(function(a, b) {
//   return a - b;
// });
// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`);


// // Parte II - Exercício 1
// // Crie uma função que receba um número e retorne seu fatorial.
// // Na matemática, o fatorial de um número não negativo N , com a notação N! , 
// // é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// // fatorial.js
// const fatorial = n => {
//   if (n > 1) {
//       return n * fatorial(n - 1)
//   }
//   return n
// }

// console.log(fatorial(4))

// // Peguei a ideia pro exercício acima nesse link.
// // https://blog.matheuscastiglioni.com.br/memorizando-funcoes-em-javascript/

// // Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . 
// // Spoiler: É possível resolver com uma linha usando ternary operator .
// const fatorial = n => n > 1 ? n * fatorial (n-1) : 1
// console.log(fatorial(4))

// // Exercício 2 

// // Crie uma função que receba uma frase e retorne qual a maior palavra.
// // Exemplo:
// // Copiar
// //       longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// const longestWord = text => {
//   let wordArray = text.split(' ');
//   let maxLength = 0;
//   let result = '';

//   for (const word of wordArray) {
//       if (word.length > maxLength) {
//           maxLength = word.length;
//           result = word;
//       }
//   }

//   return result;
// }

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


// let botao = document.querySelector("button");
// let paragrafo = document.querySelector("p");
// let clickCount = 0;

// botao.addEventListener("click", contador)
//   function contador () {
//     paragrafo.innerHTML = clickCount += 1;
//   }

// Refatorado com arrow
  let botao = document.querySelector("button");
  let paragrafo = document.querySelector("p");
  let clickCount = 0;
  
  botao.addEventListener("click", contador)
    function contador () {
      paragrafo.innerHTML = clickCount += 1;
    }
  


