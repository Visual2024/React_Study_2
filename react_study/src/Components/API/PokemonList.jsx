import { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";

export const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=30";

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((date) => {
        setPokemon(date.results);
        console.log(date);
      });
  }, []);

  return (
    <div>
      <Pokemon />
      
    </div>
  );
};
