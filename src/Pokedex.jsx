import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from "./components/Header";
import PokemonList from "./hooks/PokemonList2";

function Pokedex() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const createPokemonObject = async() => {
      setLoading(true);
      
      await axios.get('https://pokeapi.co/api/v2/pokemon?limit=120&offset=0')
      .then((data) => {
          const request = data.data.results.map(results => {
            const pokemonstat = axios.get(results.url)
            .then((pokemonData) => {
              return pokemonData.data;
            })
            return pokemonstat;
          })
           Promise.all(request).then(allPokemons => setAllPokemons(allPokemons));
      });
      setLoading(false);
  };

  useEffect(() => {
    console.log("running");
    createPokemonObject();
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-500">
      <Header />
      <div className="flex item-center justify-center">
        <div className="page-width bg-slate-600">
        <PokemonList 
          pokemons = {allPokemons} 
          isLoading = {loading}
        />
        </div>
      </div>  
    </div>
  );
}

export default Pokedex;
