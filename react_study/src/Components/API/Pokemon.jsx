import React, { useEffect, useState } from "react";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  }, []);



  return (
    <div>
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt="" />
       
        </div>
      )}
    </div>
  );
};
