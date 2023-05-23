import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Header from "./components/Header";
import PokemonList from "./hooks/PokemonList2";
import Details from "./hooks/Details";

function Pokedex() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const createPokemonObject = async() => {
      setLoading(true);
      
      await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0')
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
    createPokemonObject();
  }, []);

  console.log(allPokemons);

  return (
    <div className="w-screen h-screen bg-slate-500">
      <HashRouter>
      <Header />
      <div className="flex item-center justify-center">      
        <div className="page-width bg-slate-600">  
          <Routes>
            <Route exact path="" element={<PokemonList 
              pokemons = {allPokemons} 
              isLoading = {loading}
              />}>
            </Route>
            <Route path="/details/:name" element={<Details />}/>
          </Routes>         
        </div>
      </div> 
       </HashRouter>
    </div>
  );
}

export default Pokedex;
