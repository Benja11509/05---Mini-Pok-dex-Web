function PokemonCard({ pokemon }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Altura:</strong> {pokemon.height}</p>
    </div>
  );
}

export default PokemonCard;