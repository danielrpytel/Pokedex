import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IPokemonDetails } from "../pages/Details";
import { getColorFromUrl } from "../utils/colors";
import { getImgSize } from "../utils/imgSize";
import { getMToFtString } from "../utils/mToFtConvert";
import { getKgToLbString } from "../utils/kgToLbConvert";

export const usePokemonDetails = () => {
	const { name } = useParams();

	const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(
		null
	);
	const [loading, setLoading] = useState<boolean>(true);
	const [errorMsg, setErrorMsg] = useState<string>("");

	useEffect(() => {
		fetchPokemonDetails();
	}, [name]);

	const fetchPokemonDetails = async () => {
		setErrorMsg("");
		setLoading(true);
		try {
			const response = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${name}`
			);
			const pokemonData = response.data;

			await fetchPokemonSpecies(pokemonData);
		} catch (error) {
			setErrorMsg("Could not find that Pokemon");
			setLoading(false);
		}
	};

	const fetchPokemonSpecies = async (pokemon: any) => {
		try {
			const pokeSpecies = await axios.get(
				`https://pokeapi.co/api/v2/pokemon-species/${name}`
			);
			const pokeSpeciesData = pokeSpecies.data;

			const pokeEvolution = await axios.get(
				pokeSpeciesData.evolution_chain.url
			);
			const evolutionData = pokeEvolution.data.chain;
			const img = pokemon.sprites.other["official-artwork"].front_default;
			const imgColor = await getColorFromUrl(img);
			const imgSize = getImgSize(pokemon.height);
			const height = getMToFtString(pokemon.height);
			const weight = getKgToLbString(pokemon.weight);

			const flavor_text_entries = pokeSpeciesData.flavor_text_entries.filter(
				(entry: any) => entry.language.name === "en"
			);

			const flavor_text_sword = flavor_text_entries.find(
				(entry: any) => entry.version.name === "sword"
			)?.flavor_text;

			const flavor_text_shield = flavor_text_entries.find(
				(entry: any) => entry.version.name === "shield"
			)?.flavor_text;

			const flavor_text_default = flavor_text_entries.find(
				(entry: any) => entry.version.name === "alpha-sapphire"
			)?.flavor_text;

			const abilities = pokemon.abilities
				.map((item: any) =>
					item.ability.name.replace(/^./, (str: string) => str.toUpperCase())
				)
				.join(", ");

			const pokemonObj: IPokemonDetails = {
				id: pokemon.id.toString().padStart(4, "0"),
				name: pokemon.name.replace(/^./, (str: string) => str.toUpperCase()),
				img: img,
				imgSize: imgSize,
				imgColor: imgColor,
				types: pokemon.types,
				flavor_text_sword,
				flavor_text_shield,
				flavor_text_default,
				height: height,
				weight: weight,
				abilities,
				capture_rate: pokeSpeciesData.capture_rate,
				habitat: pokeSpeciesData.habitat?.name.replace(/^./, (str: string) =>
					str.toUpperCase()
				),
				stats: pokemon.stats,
				evolution: evolutionData,
			};
			setPokemonDetails(pokemonObj);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	return { pokemonDetails, errorMsg, loading };
};
