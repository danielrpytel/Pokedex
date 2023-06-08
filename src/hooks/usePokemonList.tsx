import { useEffect, useState } from "react";
import { IPokemonCard } from "../components/home/PokemonCard";
import { getImgSize } from "../utils/imgSize";
import { getColorFromUrl } from "../utils/colors";

import axios from "axios";

export const usePokemonList = () => {
	const [pokemonList, setPokemonList] = useState<IPokemonCard[]>([]);
	const [nextPageUrl, setNextPageUrl] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchPokemon();
	}, []);

	const transformData = async (pokemon: any) => {
		const img = pokemon.sprites.other["official-artwork"].front_default;
		const imgSize = getImgSize(pokemon.height);
		const imgColor = await getColorFromUrl(img);

		const transformedData: IPokemonCard = {
			id: pokemon.id.toString().padStart(4, "0"),
			img: img,
			name: pokemon.name,
			imgSize: imgSize,
			imgColor: imgColor,
		};
		return transformedData;
	};

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
				data.results.map(async (pokemon: any) => {
					const detailsResponse = await axios.get(pokemon.url);
					const transformedData = await transformData(detailsResponse.data);
					return transformedData;
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
			console.log(error);
		}
	};

	const fetchMorePokemon = () => {
		if (!nextPageUrl) return;
		fetchPokemon();
	};

	return { pokemonList, loading, nextPageUrl, fetchMorePokemon };
};
