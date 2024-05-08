function NavBar({setPokemonIndex, pokemonList}) {
    const handleClick = (index) => {
        setPokemonIndex(index)
      }
    return (
        <>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handleClick(index)}>
                    {pokemon.name}
                </button>
            ))}
        </>
    );
}

export default NavBar;