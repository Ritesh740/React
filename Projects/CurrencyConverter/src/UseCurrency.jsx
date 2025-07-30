import React, { useState, useEffect } from 'react';

function UseCurrency() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error('Failed to fetch:', error);
      }
    };
    fetchData();
  }, []);

  if (!pokemon) return <div className="p-4 text-center">Loading...</div>;

  const renderValue = (value) => {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      return <span>{String(value)}</span>;
    }

    if (Array.isArray(value)) {
      return (
        <ul className="ml-4 list-disc text-sm space-y-1">
          {value.map((item, index) => (
            <li key={index}>{renderValue(item)}</li>
          ))}
        </ul>
      );
    }

    if (typeof value === 'object' && value !== null) {
      return (
        <ul className="ml-4 text-sm space-y-1">
          {Object.entries(value).map(([k, v], i) => (
            <li key={i}>
              <strong className="capitalize">{k}:</strong> {renderValue(v)}
            </li>
          ))}
        </ul>
      );
    }

    return <span>Unknown</span>;
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-3xl border border-gray-200">
        {/* Header with name and image */}
        <div className="flex flex-col md:flex-row items-center bg-blue-50 p-6">
          <img
            src={pokemon.sprites?.front_default}
            alt={pokemon.name}
            className="w-32 h-32 object-contain mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h2 className="text-3xl font-bold capitalize">{pokemon.name}</h2>
            <p className="text-gray-600">ID: {pokemon.id} | Base XP: {pokemon.base_experience}</p>
            <p className="text-gray-600">Height: {pokemon.height} | Weight: {pokemon.weight}</p>
          </div>
        </div>

        {/* Dynamic data rendering */}
        <div className="p-6 overflow-y-auto max-h-[600px] space-y-4">
          {Object.entries(pokemon).map(([key, value], index) => {
            if (key === "sprites") return null; // already shown
            return (
              <div key={index}>
                <h3 className="text-lg font-semibold capitalize mb-1">{key}</h3>
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  {renderValue(value)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UseCurrency;
