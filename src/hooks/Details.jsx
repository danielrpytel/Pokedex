import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PokemonCard from "../components/PokemonCard";

function Details() {
    const urlParams = useParams();

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    async function loadPokemon() {

        await axios.get(`https://pokeapi.co/api/v2/pokemon/${urlParams.name}`)
        .then((pokemon) => {
            setPokemonData(pokemon.data);
        })    

        setLoading(false);
    }
    loadPokemon();
    }, []) 

    return (
        <div className="flex flex-col">
            { loading ? (
                <h1>Loading...</h1>
            ) : (
                
              <div className="flex flex-row">
                <div>
                    <h1>Name: {pokemonData.name}</h1>
                </div>
                <div className="w-1/2">
                </div>
                <div className="w-1/2">

                </div>
            </div>   
            )}       
        </div>
    )
}

export default Details;




