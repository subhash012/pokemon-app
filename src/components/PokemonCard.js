import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching the Pokémon details', error);
      }
    };

    fetchPokemonData();
  }, [pokemon.url]);

  return (
    <div className="pokemon-card">
      {pokemonData ? (
        <>
          <img src={pokemonData.sprites.front_default} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonCard;
