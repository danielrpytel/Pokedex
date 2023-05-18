import { useState, useEffect } from 'react';


function PokemonEvolution(evolution) {
    const [evolutionChain, setEvolutionChain] = useState([]);

    useEffect(() => {
        function buildEvolutionChainRec(evolution, pokemonsArray) {
            const id = evolution.species.url.split("/").slice(-2, -1)[0];
            const name = evolution.species.name;
            const pokemon = [id, name];

            pokemonsArray.push(pokemon);

            if (evolution.evolves_to.length === 0) {
                return;
            }

            evolution.evolves_to.forEach((childEvolution) => {
                buildEvolutionChainRec(childEvolution, pokemonsArray);
            });
        }

        const pokemonsArray = [];
        buildEvolutionChainRec(evolution.evolution, pokemonsArray);
        setEvolutionChain(pokemonsArray);
    }, []);

    console.log("Data Object");
    console.log(evolutionChain);
    return (
        <div className="w-full p-6 rounded-lg shadow-lg bg-slate-800">
            <div className="mb-3">
                <h2 className="text-slate-300 text-xl">
                    Evolutions
                </h2> 
            </div>

        </div>
    )
}

export default PokemonEvolution;