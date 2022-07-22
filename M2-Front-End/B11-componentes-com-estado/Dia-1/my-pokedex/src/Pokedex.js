import React from "react";
import Button from "./Button";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {

  constructor() {
    super();
    this.getPokemonElements = this.getPokemonElements.bind(this);
    this.getNextPokemon = this.getNextPokemon.bind(this);
    this.state = {
      index: 0,
      pokemon: this.getPokemonElements()[this.index],
    }
  }

  getPokemonElements() {
    return pokemons.map((pokemon) => (
      <Pokemon
        key={pokemon.id}
        name={pokemon.name}
        type={pokemon.type}
        value={pokemon.averageWeight.value}
        measurementUnit={pokemon.averageWeight.measurementUnit}
        image={pokemon.image}
      />
    ));
  }

  getNextPokemon(event) {
    console.log(event.target.name)
  }

  render() {
    return (
      <div>
        <p>Teste</p>
        <Button getNextPokemon={this.getNextPokemon}/>
      </div>
    );
  }
}

export default Pokedex;