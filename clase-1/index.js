// let MathCalif = 7

// const Promesa = new Promise((resolve, reject) => {
//   if (MathCalif === 10) {
//     resolve('Nuevo Celular')
//   } else {
//     reject('Sigue participando muajaja')
//   }
// })

// Promesa
//   .then(res => {
//     console.log(res)
//   })
//   .catch(res => {
//     console.log(res)
//   })
//   .finally(() => {
//     console.log('Siempre aunque se cumpla o no')
//   })



//   console.log('mensaje síncrono')

const axios = require('axios')





const getDitto = () => {
  axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => console.log(res.data.name))
  .catch(err => console.log(err))
}

getDitto()

// 1. Hacer una consulta a la poke api y desde una funcíon que se llame getPokemoById(150)
// 2. Hacer una consulta a la poke api y desde una funcíon que se llame getPokemonMovesById(150)
  //power-punch

// 1. Hacer una función que obtenga los asteroides potencialmente peligrosos para la tierra, NASA API