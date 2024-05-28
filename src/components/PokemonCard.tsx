import React, { useEffect, useState } from "react";
import type { Pokemon } from "../utils/api";

type PokemonCardProps = {
  pokemon: Pokemon;
};

type PokemonDetails = {
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [details, setDetails] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(pokemon.url);
        const data: PokemonDetails = await response.json();
        setDetails(data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [pokemon.url]);

  if (!details) return null;

  return (
    <li>
      <div className="bg-orange w-fit p-10 rounded-xl">
        <h1>Name: {pokemon.name}</h1>
        <h3>
          Type: {details.types.map((typeInfo) => typeInfo.type.name).join(", ")}
        </h3>
        <img
          src={details.sprites.front_default}
          alt={pokemon.name}
          className="w-40 h-40"
        />
      </div>
    </li>
  );
};

export default PokemonCard;
