// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
// Copiar

// 1- Criar uma funçao ok
// 2- Ela precisa retornar um objeto tal{nomeCompleto, email}
// 3- Passar essa funcao como parametro da newEmployees
// 4- Parametros da minah funcao sao: nome nomeCompleto
// 5- O retorno da dela deve ser gerar um email: nome_da_pessoa@trybe.com


const peopleData = (nomeCompleto) => ({
    nome: `${nomeCompleto}` ,
    email: `${nomeCompleto}@trybe.com`.toLowerCase().split(' ').join('_')
})

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(peopleData))



// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório 
// entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é 
// igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkFunction = (sorteado, numberBet) => {
  if (numberBet === sorteado){
    console.log('Parabéns você ganhou!');
  }
  else {
    console.log('Tente novamente!')
  }
  // console.log(resultSort());
}
// console.log(checkFunction());

const resultSort = (numberBet, callback) => {
  let sorteado = Math.floor(Math.random() * 5 + 1);
  console.log(sorteado);
  callback(sorteado, numberBet)
}
 resultSort(2, checkFunction);


// 1- Criar uma hof que retorna o resultado de um sorteio;
// 2- Essa hof deve gerar um número aleatorio entre 1 e 5;
// 3- Recebe como parametro o número apostado e uma funcao que checa se o número é igual ao sorteado;
// 4- O retorno do HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


// const resultSort = () => {
//   return Math.floor(Math.random() * 5 + 1)
// };

// console.log(resultSort());

// const checkFunction = () => {
//   if (numberBet === resultSort()){
//     console.log('Parabéns você ganhou');
//   }
//   else {
//     console.log('Tente novamente')
//   }
// }



// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
// o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma 
// função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
// Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, 
// e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
