import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import { getPokemon } from "./services/api";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setPokemon(null);

    try {
      const data = await getPokemon(query);
      setPokemon(data);
    } catch {
      setError("No se encontró el Pokémon");
    }

    setLoading(false);
  };

  return (
    <div className="app">

      {/* IZQUIERDA - POKEDEX */}
      <div className="pokedex-panel">
        <h1>Mini Pokédex</h1>

        <SearchBar onSearch={handleSearch} />

        <div className="screen">
          {loading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {pokemon && <PokemonCard pokemon={pokemon} />}
        </div>
      </div>

      {/* DERECHA - LISTA */}
      <div className="list-panel">
        <h2>Lista de Pokémon</h2>
        <PokemonList />
      </div>

    </div>
  );
}

export default App;