import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const pokemonElements = pokemons.map((pokemon) => (
      <Pokemon
        key={pokemon.id}
        name={pokemon.name}
        type={pokemon.type}
        value={pokemon.averageWeight.value}
        measurementUnit={pokemon.averageWeight.measurementUnit}
        image={pokemon.image}
      />
    ));
    return (
      <div>
        {pokemonElements}
      </div>
    );
  }
}

export default Pokedex;