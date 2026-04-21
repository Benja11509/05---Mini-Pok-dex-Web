const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async (query) => {
  const res = await fetch(`${BASE_URL}/pokemon/${query}`);
  if (!res.ok) throw new Error("Pokemon no encontrado");
  return await res.json();
};

export const getPokemonList = async (limit = 20) => {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  return await res.json();
};

export const getPokemonByType = async (type) => {
  const res = await fetch(`${BASE_URL}/type/${type}`);
  return await res.json();
};