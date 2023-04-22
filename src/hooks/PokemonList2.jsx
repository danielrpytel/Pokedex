import PokemonCard from '../components/PokemonCard';

function PokemonList2({pokemons, isLoading}) {

    console.log(pokemons);
    return(
        <>
        {isLoading ? (
            <h1> Loading </h1>
        ) : (
            <div className="grid grid-cols-5 gap-4">
                {pokemons.length > 0 ? (
                   pokemons.map((pokemonStats) => (
                    <PokemonCard 
                    key = {pokemonStats.id}
                    id = {pokemonStats.id.toString().padStart(3, "0")}
                    image = {pokemonStats.sprites.other['official-artwork'].front_default}
                    name = {pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
                    type = {pokemonStats.types[0].type.name}
                    weight = {pokemonStats.weight}
                    height = {pokemonStats.height}
                    stats = {pokemonStats.stats.map((stat) => stat.base_stat).slice(0,3)}
                    />     
                ))   
                ) : (
                    <h1>No Pokemon Found</h1>
                )
              }
            </div>
        )}      
        </>       
    )  
}

export default PokemonList2;