function NavBar({pokemonId, setPokemonId, pokemonListLength}) {
    const handleClickBefore = () => {
        setPokemonId(pokemonId - 1 )
      }
      const handleClickAfter = () => {
        setPokemonId(pokemonId + 1)
      }
    return (
        <>
        {pokemonId > 0 ? <button onClick={handleClickBefore}>Précédent</button> : ''}
        {pokemonId < pokemonListLength - 1 ? <button onClick={handleClickAfter}>Suivant</button> : ''}
        </>
    );
}

export default NavBar;