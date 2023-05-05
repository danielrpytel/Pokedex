import PokemonCard from '../components/PokemonCard';

function PokemonList2({pokemons, isLoading}) {

    return(
        <>
        <div className="flex justify-center">   
        {isLoading ? (
            <h1> Loading </h1>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
                {pokemons.length > 0 ? (
                   pokemons.map((pokemonStats) => (
                    <PokemonCard 
                    key = {pokemonStats.id}
                    id = {pokemonStats.id.toString().padStart(3, "0")}
                    image = {pokemonStats.sprites.other['official-artwork'].front_default}
                    name = {pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
                    nameUrl = {pokemonStats.name}
                    height = {pokemonStats.height}
                    />     
                ))   
                ) : (
                    <h1>No Pokemon Found</h1>
                )
              }
            </div>
        )}      
        </div>
        </>       
    )  
}

export default PokemonList2;