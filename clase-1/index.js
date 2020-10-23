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
 

// 1. Hacer una consulta a la poke api y desde una funcíon que se llame getPokemoById(150)
// const getPokemonById = (id) => {
//   return axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
//     .then((res) => {
//         return res.data
//     })
//     .catch((err) => {
//         return err
//     })
// }

const getPokemoById = async (id) => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
  console.log(response);
  return response
}

getPokemoById('pikachu')





// 2. Hacer una consulta a la poke api y desde una funcíon que se llame getPokemonMovesById(150)
  //power-punch
  const getPokemonMovesById = (id) => {
    // 
    return getPokemonById(id)
      .then((res) => {
        const PokemonMovesName = res.moves.map(move => move.move.name)
        return PokemonMovesName
      })
      .catch((err => console.log(err)))
  }
// getPokemonMovesById('pikachu')
// 3. Hacer una función que obtenga los asteroides potencialmente peligrosos para la tierra, NASA API

const getPotentiallyHazardousAsteroid = () => {
  return axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=n5T44Ib5b9VBUta4lB4tFrasUpD6VFlNomKrdfFH')
    .then((res) => {
        let potentiallyHazardousAsteroid = []
        console.log(res.data)
        res.data.near_earth_objects.forEach((asteroid, index) => {
            if (asteroid.is_potentially_hazardous_asteroid === true) {
                potentiallyHazardousAsteroid.push(asteroid)
                //console.log(asteroid.is_potentially_hazardous_asteroid)
            }
        })
        // console.log(potentiallyHazardousAsteroid);
        return potentiallyHazardousAsteroid
    })
    .catch((err) => {
        console.log(err);
        return err
    })
}
// getPotentiallyHazardousAsteroid().then((res) => {
//   console.log(res)
// })