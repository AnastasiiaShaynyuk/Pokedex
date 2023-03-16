

export class Pokemon {

  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.type = data.type

  }


  static listTemplate(pokemon) {
    return `
    <h5 class="ps-3 py-1" onclick="app.pokemonsController.selectPokemon('${pokemon.name}')"><i class="mdi mdi-pokeball"></i>  ${pokemon.name}</h5>
    `
  }

  get ActiveTemplate() {
    return `
    <div class="row  border border-3">
            <h3 class="text-center">${this.name}</h3>
          <div class="col-12 text-center">
          <img class="image" src="${this.img}" alt="${this.name}">
          </div>
          <div class="col-12">
            <div class="row">
            <div class="col-5">
              <p>Height: <span>${this.height} ft</span></p>
              <p>Types: <span>${this.type}</span></p>
            </div>
            <div class="col-5">
              <p>Weight: <span>${this.weight} lbs</span></p>
            </div>
            <div class="col-12 d-flex justify-content-center"><button class="btn btn-outline-danger" onclick="app.sandboxPokemonsController.addPokemon()">Catch</button></div>
            
          </div>
          </div>
        </div>
    `
  }
}