
// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const acordando = () => {
    return 'Acordando!!'
}
// console.log(acordando());

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const tomarCafe = () => {
    return 'Partiu tomar café!!'
}
// console.log(tomarCafe());


// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const sleep = () => {
    return 'Partiu dormir!!'
}
// console.log(sleep());

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta 
// função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

// Ao chamar a função doingThings:
// doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
  };

doingThings(acordando);
doingThings(tomarCafe);
doingThings(sleep);
