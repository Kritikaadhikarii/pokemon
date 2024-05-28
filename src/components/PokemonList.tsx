import React, { useEffect, useState } from 'react';
import { fetchPokemons } from '../utils/api';
import type { Pokemon } from '../utils/api';
import PokemonCard from './PokemonCard';
import SearchBar from './SearchBar';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const pokemons = await fetchPokemons();
        setPokemons(pokemons);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  if (loading) return 
  <div className="text-white">Loading...</div>;

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <ul className="flex flex-wrap justify-center gap-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
