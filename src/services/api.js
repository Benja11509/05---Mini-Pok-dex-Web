const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async (query) => {
  const res = await fetch(`${BASE_URL}/pokemon/${query}`);

  if (!res.ok) {
    throw new Error("Error en la petición");
  }

  return await res.json();
};

export const getPokemonList = async (limit = 20) => {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);

  if (!res.ok) {
    throw new Error("Error al traer la lista");
  }

  return await res.json();
};