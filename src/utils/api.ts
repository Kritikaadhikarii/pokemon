export type Pokemon = {
  name: string;
  url: string;
};

export type ApiResponse = {
  results: Pokemon[];
  next?: string | null;
};

const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const CACHE_KEY = 'pokemons';
const CACHE_TIMESTAMP_KEY = 'pokemonsTimestamp';
const ONE_HOUR = 3600000;

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const cache = localStorage.getItem(CACHE_KEY);
  const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

  if (cache && cacheTimestamp && Date.now() - parseInt(cacheTimestamp) < ONE_HOUR) {
    return JSON.parse(cache);
  }

  try {
    let url: string | null = API_URL;
    let allPokemons: Pokemon[] = [];

    while (url) {
      const response = await fetch(url);
      const data: ApiResponse = await response.json();
      allPokemons = [...allPokemons, ...data.results];
      url = data.next || null;
    }

    console.log(allPokemons.length);
    localStorage.setItem(CACHE_KEY, JSON.stringify(allPokemons));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    return allPokemons;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw new Error('Failed to fetch Pokémon data');
  }
};
