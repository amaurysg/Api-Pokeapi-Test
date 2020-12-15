//Api base
const POKE_API_URL = "https://pokeapi.co/api/v2"
//
const getPokemon = async (pokeId)=>{
    const endPoint = `${POKE_API_URL}/pokemon/${pokeId}`
    return new Promise ((resolve,reject)=>{
      fetch(endPoint)
      .then()
    })


}