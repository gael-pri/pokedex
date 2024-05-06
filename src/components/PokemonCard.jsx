const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

function PokemonCard() {
    const selectPokemon = 0;
    const img = (pokemonList[selectPokemon].imgSrc != undefined) ? <img src={pokemonList[selectPokemon].imgSrc} /> : <p>???</p>;
    const pokemon = {
        name: pokemonList[selectPokemon].name,
        imgSrc: img
    }
    return (
        <figure>
            {pokemon.imgSrc}
            <figcaption>
                <p>{pokemon.name}</p>
            </figcaption>
        </figure>
    );
}

export default PokemonCard;