
// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce(
        (acumulator, valorAtual) => acumulator.concat(valorAtual),
    []
    )};
  console.log(flatten());


  // function flatten() {
  //   return arrays.reduce(
  //       (acumulator, valorAtual) => [`${acumulator} ${valorAtual}`],
  //   []
  //   )};
  // console.log(flatten());



