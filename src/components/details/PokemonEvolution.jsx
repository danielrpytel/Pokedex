import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function PokemonEvolution({
    evolution,
    type
}) {
    const [evolutionChain, setEvolutionChain] = useState([]);

    useEffect(() => {
        const pictureUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

        function buildEvolutionChainRec(evolution, pokemonsArray) {
            const id = evolution.species.url.split("/").slice(-2, -1)[0];
            const name = evolution.species.name;
            const pokemon = {
                id: id, 
                name: name,
                pictureUrl: pictureUrl + id + ".png"
            };

            pokemonsArray.push(pokemon);

            if (evolution.evolves_to.length === 0) {
                return;
            }

            evolution.evolves_to.forEach((childEvolution) => {
                buildEvolutionChainRec(childEvolution, pokemonsArray);
            });
        }

        const pokemonsArray = [];
        buildEvolutionChainRec(evolution, pokemonsArray);
        setEvolutionChain(pokemonsArray);
    }, []);

    console.log("Data Object");
    console.log(type);
    return (
        <div className="w-full p-6 rounded-lg shadow-lg bg-slate-800">
            <div className="mb-3">
                <h2 className="text-slate-300 text-xl">
                    Evolutions
                </h2> 
            </div>
            <div className="flex flex-row justify-around">
                {evolutionChain.map((pokemon, indx, arr) => {
                    return (
                        <Link key={pokemon.name} to={`/details/${pokemon.name}`}>
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className={`${type.type.name}`}>
                                    <img className="h-52" src={pokemon.pictureUrl} alt={pokemon.name} />
                                </div>
                                <div className="bg-white">
                                    <div className="px-4 pt-2">
                                        <p className="text-lg">
                                            #{pokemon.id.toString().padStart(4, "0")} 
                                        </p>
                                    </div>
                                    <div className="px-4 py-2">
                                        <p className="font-bold text-2xl">{pokemon.name.replace(/^./, (str) => str.toUpperCase())}</p> 
                                    </div>   
                                </div>      
                            </div>   
                        </Link>                     
                    )
                })}
            </div>
        </div>
    )
}

export default PokemonEvolution;