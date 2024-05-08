import { useState } from "react";
import NavBar from "./components/NavBar"
import PokemonCard from "./components/PokemonCard"

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonId, setPokemonId] = useState(0);

  return (
    <div>
      <NavBar 
        setPokemonIndex = {setPokemonId} 
        pokemonList = {pokemonList} />
      <PokemonCard pokemon={pokemonList[pokemonId]} />
    </div>
  );
}

export default App;