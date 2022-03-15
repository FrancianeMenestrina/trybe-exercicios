

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find .

function authorBornIn1947(listaDeLivros) {
  // return books.find((book) => book.author.birthYear === 1947).author.name;
  return listaDeLivros.find(function batata(item) {
    return item.author.birthYear === 1947
  }).author.name


}

console.log(authorBornIn1947(books));









// // SOMENTE PARA FIXACAO DO APRENDIZADO


// // function chuva(callback) {
// //   callback()
// // }

// // chuva(function pingodechuva() {
// //   console.log('ta chovendo')
// // })



// const chuva = (callback) => {
// callback()
// }

// retornoFunctionChuva = chuva(() => {
//   return 'Tá chovendo'
// })
// console.log(retornoFunctionChuva)





// debugger
// function chuva(callback) {
//   const retornodafuncaocallback = callback()
//   return retornodafuncaocallback
// }

// let resultadofuncaochuva = chuva(function pingodechuva() {
//   return 'ta chovendo'
// })

// console.log(resultadofuncaochuva)




// // function flores (callback) {
// // let retordoDacallback = callback()
// // return retordoDacallback
// // }

// // let retornofunctionFlores = flores (function margarida (){
// //   return 'Apareceu a margarida!'
// // })
// // console.log(retornofunctionFlores)



// // function flores (callback) {
// //   return callback() 
// //   }
  
// //   let retornofunctionFlores = flores (function margarida (){
// //     return 'Apareceu a margarida!'
// //   })
// //   console.log(retornofunctionFlores)






// // function telefone (calback) {
// //   return calback()
// // }

// // let retornoFunctionTelefone = telefone(function mensagem() {
// //   return 'Oh babe, me atende...'
// // })
// // console.log(retornoFunctionTelefone)




// // const telefone = (calback) => {
// // return calback()
// // }

// // let retornoFunctionTelefone = telefone(() => {
// //   return 'Oh babe, me atende...'
// // })
// // console.log(retornoFunctionTelefone)

// function chuva(callback) {
//   const retornodafuncaocallback = callback()
//   return retornodafuncaocallback
// }
// let resultadofuncaochuva = chuva(function pingodechuva() {
//   return 'ta chovendo'
// })
// console.log(resultadofuncaochuva)


// const chuva = (callback) => {
//   const retordoDacallback = callback()
//   return retordoDacallback
// }
// const resultadofuncaochuva = chuva(()=> {
//   return 'Tá chovendo'
// })

// console.log(resultadofuncaochuva);




// const chuva = (callback) => callback()

// const resultadofuncaochuva = chuva(()=> 'Tá chovendo')

// console.log(resultadofuncaochuva);






































