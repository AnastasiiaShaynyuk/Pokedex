import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"

const pokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 8000
})

class PokemonsService {
  async getAllPokemons() {
    const res = await pokemon.get('pokemon')
    // console.log('all pokemons', res.data)
    appState.pokemon = res.data.results
    console.log(appState.pokemon)
  }

  async getOnePokemon(name) {
    const res = await pokemon.get(`pokemon/${name}`)
    console.log('one pokemon', res.data)
    appState.activePokemon = new Pokemon(res.data)
  }
}



export const pokemonsService = new PokemonsService() 