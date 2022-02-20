// Exercício 1
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é
// let array = [];
// let soma = 0;

// for (let index = 0; index <= 50; index += 1){
//     array.push(index)
//     soma = soma + array[index];
// }

// console.log("A soma total de 1 a 50 é "+ soma);

// Exercício 2
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let contadorDivisiveis = [];

// for (let index = 2; index <= 150; index += 1){
//     if (index % 3 === 0){
//         contadorDivisiveis.push(index)
//     }
// }
// if (contadorDivisiveis.length === 50){
//     console.log("Mensagem Secreta: São 50 divisores!")
// }else 
// {
//   console.log("Não é 50") 
// }

// Exercício 3
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// let jogador1 =['pedra','papel','tesoura'];
// let jogador2 = ['pedra','papel','tesoura'];
// for (let jogo = 0; jogo < jogador1.length; jogo +=1){
//     console.log(jogo);
//     for (let jogo2 = 0; jogo2 < jogador2.length; jogo2 +=1){
//         console.log(jogo2);
//         if (jogo === jogo2){
//             console.log("A Ties")
//         }else if (jogo === 0 && jogo2 ===2 || jogo ===1 && jogo2===0 || jogo ===2&& jogo2 ===1) {
//             console.log("Player 1 won")
//         }else {
//             console.log("Player 2 won")
//         }}}


//Exercício 4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

// let idade = 122; 
// let maioridade = (idade >= 18 ? console.log('sim') : console.log('nao') );

//System.out.println(maioridade);

// documentacao do link :https://www.alura.com.br/artigos/o-que-e-o-operador-ternario?gclid=Cj0KCQiAuvOPBhDXARIsAKzLQ8GB4pYydekg-H4ojvGA425EsAu_h-0UoKJBgKlvIfbbONRNobTtoHgaAkAyEALw_wcB


// Exercício 5

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.


// let carol = 13;
// let murilo = 19;
// let baeta = 89;
// let pessoas = ['Carolzita' , 'Murilo' , 'Baêta']
// let pessoaMaisNovx = 0
// if (carol < murilo && carol < baeta) {
//     pessoaMaisNovx = pessoas[0]
// }else if ( murilo < carol && murilo < baeta) {
//     pessoaMaisNovx = pessoas[1]
// }else {
//     pessoaMaisNovx = pessoas[2]
// }

// console.log( pessoaMaisNovx + ' é a pessoa mais nova.')