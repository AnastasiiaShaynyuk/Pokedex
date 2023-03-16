import { pokemonsService } from "../Services/PokemonsService.js"
import { Pokemon } from "../Models/Pokemon.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"

function _drawPokemonList() {
  let pokemons = appState.pokemon
  let template = ''
  pokemons.forEach(p => template += Pokemon.listTemplate(p))
  setHTML('pokemons', template)
}

function _drawActivePokemon() {
  let pokemon = appState.activePokemon
  setHTML('active-pokemon', pokemon.ActiveTemplate)
}


export class PokemonsController {
  constructor() {
      console.log('hello')
      this.getAllPokemons()
      appState.on('pokemon', _drawPokemonList)
      appState.on('activePokemon', _drawActivePokemon)
    }


    async getAllPokemons() {
        try {
          await pokemonsService.getAllPokemons()
        } catch (error) {
          console.error(error)
        }
      }

      async selectPokemon(name) {
        try {
          console.log('selected', name);
          await pokemonsService.getOnePokemon(name)
        } catch (error) {
          console.error(error)
        }
      }
}

