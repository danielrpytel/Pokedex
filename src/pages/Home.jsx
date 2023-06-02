import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import PokemonCard from "../components/PokemonCard";

function Home() {
	const [pokemonList, setPokemonList] = useState([]);
	const [nextPageUrl, setNextPageUrl] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchPokemon();
	}, []);

	const fetchPokemon = async () => {
		try {
			setLoading(true);

			const response = await axios.get("https://pokeapi.co/api/v2/pokemon", {
				params: {
					limit: 20,
					offset: pokemonList.length,
				},
			});

			const data = response.data;

			const pokemonDetails = await Promise.all(
				data.results.map(async (pokemon) => {
					const detailsResponse = await axios.get(pokemon.url);
					return detailsResponse.data;
				})
			);

			setPokemonList((prevPokemonList) => [
				...prevPokemonList,
				...pokemonDetails.filter(
					(pokemon) => !prevPokemonList.some((p) => p.id === pokemon.id)
				),
			]);

			setNextPageUrl(data.next);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	const fetchMorePokemon = () => {
		if (!nextPageUrl) return;
		fetchPokemon();
	};

	const pokemonCards = pokemonList.map((pokemon) => {
		return (
			<PokemonCard
				key={pokemon.id}
				id={pokemon.id.toString().padStart(4, "0")}
				image={pokemon.sprites.other["official-artwork"].front_default}
				name={pokemon.name.replace(/^./, (str) => str.toUpperCase())}
				nameUrl={pokemon.name}
				height={pokemon.height}
			/>
		);
	});

	return (
		<div className="flex justify-center">
			{loading && pokemonList.length === 0 && (
				<div className="mx-auto">Loading...</div>
			)}
			<InfiniteScroll
				className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5"
				hasMore={!!nextPageUrl}
				next={fetchMorePokemon}
				dataLength={pokemonList.length}
				loader={<p>Loading...</p>}
			>
				{pokemonCards}
			</InfiniteScroll>
		</div>
	);
}

export default Home;
