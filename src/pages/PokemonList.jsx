import { useEffect, useState } from "react";
import axios from "axios";

import PokemonCard from "../components/PokemonCard";

function PokemonList() {
	const [allPokemons, setAllPokemons] = useState([]);
	const [loading, setLoading] = useState(true);

	const createPokemonObject = async () => {
		setLoading(true);

		await axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
			.then((data) => {
				const request = data.data.results.map((results) => {
					const pokemonstat = axios.get(results.url).then((pokemonData) => {
						return pokemonData.data;
					});
					return pokemonstat;
				});
				Promise.all(request).then((allPokemons) => setAllPokemons(allPokemons));
			});
		setLoading(false);
	};

	useEffect(() => {
		createPokemonObject();
	}, []);

	return (
		<div className="flex justify-center">
			{loading ? (
				<h1> Loading </h1>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
					{allPokemons.length > 0 ? (
						allPokemons.map((pokemon) => (
							<PokemonCard
								key={pokemon.id}
								id={pokemon.id.toString().padStart(4, "0")}
								image={pokemon.sprites.other["official-artwork"].front_default}
								name={pokemon.name.replace(/^./, (str) => str.toUpperCase())}
								nameUrl={pokemon.name}
								height={pokemon.height}
							/>
						))
					) : (
						<h1>No Pokemon Found</h1>
					)}
				</div>
			)}
		</div>
	);
}

export default PokemonList;
