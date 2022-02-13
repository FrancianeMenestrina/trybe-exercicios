// Exercício 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  
  console.log("Bem vinda, "+ info["personagem"] + " !");

// Exercício 2
// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info["recorrente"] = "Sim";
  console.log(info);
  
Exercício 3
Faça um for/in que mostre todas as chaves do objeto.
for (let key in info){
    console.log(key);
}

Exercício 4
Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for (let key in info){
    console.log(info[key]);
}

// Exercício 5
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let key in info) {
    if (
      key === 'recorrente' &&
      info[key] === 'Sim' &&
      info2[key] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[key] + ' e ' + info2[key]);
    }
  }

// Exercício 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  
  Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
  
  console.log("O livro favorito de " + leitor["nome"] + " " + leitor["sobrenome"]+ " se chama " + leitor["livrosFavoritos"][0]["titulo"]);

//   Exercício 7
//   7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
  );

//   Exercício 8
//   Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

  console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');

// Funções - Exercício 1

// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindromo('arara')); 
  console.log(verificaPalindromo('desenvolvimento'));

//   2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function maiorindice (array){
  let maiornumero = 0
  let posicao = 0
  for (let index = 0; index < array.length; index +=1){
      if(array[index] > maiornumero){
        maiornumero = array[index]
        posicao = index  
      }
  }

  return posicao
}
console.log(maiorindice([4, 9, 7]));

function maiorNumero (array){
  let maiornumero = 0
  let posicao = 0
  for (let index = 0; index < array.length; index +=1){
      if(array[index] > maiornumero){
        maiornumero = array[index]
        posicao = index  
      }
  }

  return maiornumero
}
// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .

function menorindice (array){
  //let menornumero = Number.MAX_SAFE_INTEGER //Ele é o maior número possível
  let menornumero = maiorNumero(array) //Aqui estamos integrando as duas funçòes
  let posicao = 0
  for (let index = 0; index < array.length; index +=1){
      if(array[index] < menornumero){
        menornumero = array[index]
        posicao = index  
      }
  }

  return posicao
}
console.log(menorindice([10, 9, 7]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function MaiorNome(arraynomes) {
  let nomeMaior = ""
  for (let index = 0; index < arraynomes.length; index += 1){
    
    if (arraynomes[index].length > nomeMaior.length){
      nomeMaior = arraynomes[index]
    }
}

  return nomeMaior
}

console.log(MaiorNome(["Ivo", "Maria", "Pe"]))