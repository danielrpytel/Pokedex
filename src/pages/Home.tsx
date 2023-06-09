import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonCard, { IPokemonCard } from "../components/home/PokemonCard";
import { usePokemonList } from "../hooks/usePokemonList";
import Loading from "../components/Loading";

function Home() {
	const { pokemonList, loading, nextPageUrl, fetchMorePokemon } =
		usePokemonList();

	return (
		<div>
			{loading && pokemonList.length === 0 && <Loading />}
			<div className="">
				<InfiniteScroll
					style={{ overflow: "none" }}
					hasMore={!!nextPageUrl}
					next={fetchMorePokemon}
					dataLength={pokemonList.length}
					scrollThreshold={1}
					loader={
						<div className="justify-content-center align-item-center mb-6 flex min-h-fit w-full">
							<div className="pokeball mx-auto h-20"></div>
						</div>
					}
				>
					<div className="m-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
						{pokemonList.map((pokemon: IPokemonCard) => {
							return <PokemonCard key={pokemon.id} {...pokemon} />;
						})}
					</div>
				</InfiniteScroll>
			</div>
		</div>
	);
}

export default Home;
