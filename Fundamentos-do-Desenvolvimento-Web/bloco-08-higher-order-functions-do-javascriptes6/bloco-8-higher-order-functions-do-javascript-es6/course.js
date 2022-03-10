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