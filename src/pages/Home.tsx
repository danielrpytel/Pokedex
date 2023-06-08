import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonCard, { IPokemonCard } from "../components/home/PokemonCard";
import { usePokemonList } from "../hooks/usePokemonList";

function Home() {
	const { pokemonList, loading, nextPageUrl, fetchMorePokemon } =
		usePokemonList();

	return (
		<div className="flex justify-center">
			{loading && pokemonList.length === 0 && (
				<div className="mx-auto">Loading...</div>
			)}
			<InfiniteScroll
				className="m-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
				hasMore={!!nextPageUrl}
				next={fetchMorePokemon}
				dataLength={pokemonList.length}
				loader={<p>Loading...</p>}
			>
				{pokemonList.map((pokemon: IPokemonCard) => {
					return <PokemonCard key={pokemon.id} {...pokemon} />;
				})}
			</InfiniteScroll>
		</div>
	);
}

export default Home;
