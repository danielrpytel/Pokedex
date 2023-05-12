import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import HeaderName from '../components/details/HeaderName';
import PokemonImg from '../components/details/PokemonImg';
import PokemonOverview from '../components/details/PokemonOverview';
import PokemonInfo from '../components/details/PokemonInfo';

function Details() {
    const { name } = useParams();

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPokemon() {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((pokemon) => {
                loadSpecies(pokemon.data);
            })    
        }

        async function loadSpecies(pokemon) {
            
            try {
                let pokeSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
                let pokeEvolution = await axios.get(pokeSpecies.data.evolution_chain.url);
    
                var flavor_text_sword = "";
                var flavor_text_shield = "";
                var flavor_text_default = "";
    
                pokeSpecies.data.flavor_text_entries.forEach((item) => {
                    if (item.language.name !== "en") return false;
                    if (item.version.name === "sword") {
                      flavor_text_sword = item.flavor_text;
                    } else if (item.version.name === "shield") {
                      flavor_text_shield = item.flavor_text;
                    }
                    flavor_text_default = item.flavor_text;
                  });
    
                var abilities = "";
    
                pokemon.abilities.forEach((item, index) => {
                    let ability = item.ability.name.replace(/^./, (str) => str.toUpperCase());
                    abilities += `${ability}${
                        pokemon.abilities.length === index + 1 ? "" : ", "
                    }`;
                });
    
                var pokemonObj = {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.other['official-artwork'].front_default,
                    types: pokemon.types,
                    flavor_text_sword,
                    flavor_text_shield,
                    flavor_text_default,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    abilities,
                    capture_rate: pokeSpecies.data.capture_rate,
                    habitat: pokeSpecies.data.habitat?.name.replace(/^./, (str) => str.toUpperCase()),
                    stats: pokemon.stats,
                    evolution: pokeEvolution.data.chain,
                  };
    
                setPokemonData(pokemonObj)
                setLoading(false);
            } catch (error) {
                console.log(error);
            }   
        }

        loadPokemon();
    }, []) 
    
    

    return (
        <>
            { loading ? (
                <h1>Loading...</h1>
                ) : (
                <div className="flex flex-col">
                    <HeaderName 
                    name= {pokemonData.name.replace(/^./, (str) => str.toUpperCase())} 
                    id = {pokemonData.id.toString().padStart(4, "0")}
                    />
                    <div className="flex flex-row">
                        <div className="w-1/2">
                            <PokemonImg 
                            name = {pokemonData.name}
                            height = {pokemonData.height}
                            image = {pokemonData.image}
                            />
                        </div>
                        <div className="w-1/2">
                            <div className="w-full mb-8">
                                <PokemonOverview 
                                flavor_text_sword = {pokemonData.flavor_text_sword}
                                flavor_text_shield = {pokemonData.flavor_text_shield}
                                flavor_text_default = {pokemonData.flavor_text_default}
                                nameAlt = {pokemonData.name}
                                />
                            </div> 
                            <div className="w-full">
                                <PokemonInfo 
                                    height = {pokemonData.height}
                                    weight = {pokemonData.weight}
                                    habitat = {pokemonData.habitat}
                                    abilities = {pokemonData.abilities}
                                    capture_rate = {pokemonData.capture_rate}
                                />
                            </div> 
                        </div>  
                         
                    </div>                         
                </div>  
            )}         
        </>
        
    )
}

export default Details;




