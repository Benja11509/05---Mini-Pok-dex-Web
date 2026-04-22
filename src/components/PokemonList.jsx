import { useEffect, useState } from "react";
import "./PokemonList.css";
function PokemonList() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
        const data = await res.json();

        const detailed = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            return await res.json();
          })
        );

        setList(detailed);
      } catch (e) {
        console.log("Error cargando lista");
      }
    };

    fetchList();
  }, []);

  const filtered = list.filter((p) =>
    p.name.includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="pokemon-grid">
        {filtered.map((p) => (
          <div key={p.id} className="pokemon-item">
            <img
              src={p.sprites.front_default}
              alt={p.name}
            />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;