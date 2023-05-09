import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import HeaderName from '../components/details/HeaderName';
import PokemonImg from '../components/details/PokemonImg';

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
                            image = {pokemonData.sprites.other['official-artwork'].front_default}
                            />
                        </div>
                        <div className="w-1/2">
                        </div>
                    </div> 
                </div>  
            )}         
        </>
        
    )
}

export default Details;




