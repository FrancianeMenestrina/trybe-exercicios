// Exercício 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
  
//   console.log("Bem vinda, "+ info["personagem"] + " !");

// Exercício 2
// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   info["recorrente"] = "Sim";
//   console.log(info);
  
// Exercício 3
// Faça um for/in que mostre todas as chaves do objeto.
// for (let key in info){
//     console.log(key);
// }

// Exercício 4
// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

// for (let key in info){
//     console.log(info[key]);
// }

// Exercício 5
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };
  
//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };
  
//   for (let key in info) {
//     if (
//       key === 'recorrente' &&
//       info[key] === 'Sim' &&
//       info2[key] === 'Sim'
//     ) {
//       console.log('Ambos recorrentes');
//     } else {
//       console.log(info[key] + ' e ' + info2[key]);
//     }
//   }