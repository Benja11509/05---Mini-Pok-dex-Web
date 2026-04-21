import { useEffect, useState } from "react";
import { getPokemonList, getPokemon } from "../services/api";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const data = await getPokemonList(40); // MÁS pokemones

      const detailed = await Promise.all(
        data.results.map(p => getPokemon(p.name))
      );

      setPokemons(detailed);
    };

    fetchList();
  }, []);

  return (
    <div className="grid">
      {pokemons.map(p => (
        <div key={p.id} className="pokemon-item">
          <img src={p.sprites.front_default} alt={p.name} />
          <p>{p.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;