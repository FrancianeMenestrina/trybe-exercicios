

const states = [
  { short: "AM", name: "Amazonas" },
  { short: "PA", name: "Pará" },
  { short: "TO", name: "Tocantins" },
  { short: "MG", name: "Minas Gerais" },
  { short: "BA", name: "Bahia" },
  { short: "PR", name: "Paraná" },
  { short: "SP", name: "São Paulo" },
  { short: "RN", name: "Rio Grande do Norte" },
  { short: "CE", name: "Ceará" }
];

const regions = [
  { short: "N", name: "Norte" },
  { short: "NE", name: "Nordeste" },
  { short: "CW", name: "Centroeste" },
  { short: "SE", name: "Sudeste" },
  { short: "S", name: "Sul" },
];

const cities = [
  { state: "AM", name: "Manaus", region: "N" },
  { state: "PA", name: "Belém", region: "N" },
  { state: "TO", name: "Porto Nacional", region: "N" },
  { state: "MG", name: "Lavras", region: "SE" },
  { state: "BA", name: "Feira de Santana", region: "NE" },
  { state: "PR", name: "Cascavel", region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

// 1-Mapeie em modo que fique um array com strings:
// [
//   'Manaus' - 'AM'
//   'Belém' - 'PA'
// ]

//   function retornaString (array) {
//     return array.map((elemento) => {
//       return `${elemento.name} - ${elemento.state}`
//     })
//   }
// console.log(retornaString(cities));



// // 1.1 Transforme o array objetos cities em um array strings com o seguinte formato:
// // "A cidade de Lavras fica no estado de Minas Gerais e na região Sudeste"

// const city = cities.map((itemDeCities) => {
//   const stateObject = states.find((itemDeStates) => {
//     return itemDeStates.short === itemDeCities.state;
//   })
//   const regionObject = regions.find((itemDeRegions) => {
//     return itemDeRegions.short === itemDeCities.region 
//   })
//   return `A cidade de ${itemDeCities.name} fica no estado de  ${stateObject.name} e na região ${regionObject.name}`
// })



// console.log(city);




//   // 2. Transforme (Mapeie) o array de objeto cities em um array de objetos do seguinte formato:
//   // {
//   //   state: "Amazonas",
//   //   city: "Manaus",
//   //   region: "Norte"
//   // }
//   //  {
//   //     state: 'Pará',
//   //   city: 'Belém',
//   //   region: 'Norte'
//   // },

//   const city = cities.map((itemDeCities) => {
//     const stateObject = states.find((itemDeStates) => {
//       return itemDeStates.short === itemDeCities.state;
//     })
//     const regionObject = regions.find((itemDeRegions) => {
//       return itemDeRegions.short === itemDeCities.region 
//     })
//     return {
//             city: `${itemDeCities.name}`,
//             state: `${stateObject.name}`,
//             region: `${regionObject.name}`,
//   }
//   })
  

//   console.log(city);


//   // 2.1 Transforme o array objetos cities em um array strings com o seguinte formato:
// // "A cidade de Lavras fica no estado de Minas Gerais.

const cityName =  cities.map((itemCities) => {
const stateName = states.find((itemStates)=> {
  return itemStates.short === itemCities.state
})
return `A cidade de ${itemCities.name} fica no estado de ${stateName.name}`
})
    

console.log(cityName);
