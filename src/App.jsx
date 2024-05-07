import { useState } from "react";
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
  const handleClickBefore = () => {
    setPokemonId(pokemonId - 1 )
  }
  const handleClickAfter = () => {
    setPokemonId(pokemonId + 1)
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonId]} />
      {pokemonId > 0 ? <button onClick={handleClickBefore}>Précédent</button> : ''}
      {pokemonId < pokemonList.length - 1 ? <button onClick={handleClickAfter}>Suivant</button> : ''}
    </div>
  );
}

export default App;
