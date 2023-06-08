import { useState, useEffect } from "react";
import { IEvolution } from "../components/details/PokemonEvolution";
import { IPokemon } from "../components/details/EvolutionCard";

export const useEvolution = (evolution: IEvolution) => {
	const [evolutionChain, setEvolutionChain] = useState<IPokemon[] | undefined>(
		[]
	);

	function buildEvolutionChainRec(
		evolution: IEvolution,
		pokemonsArray: IPokemon[]
	) {
		const pictureUrl =
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
		const id = evolution.species.url.split("/").slice(-2, -1)[0];
		const name = evolution.species.name;
		const pokemon = {
			id: id.toString().padStart(4, "0"),
			nameUrl: name,
			name: name.replace(/^./, (str) => str.toUpperCase()),
			pictureUrl: pictureUrl + id + ".png",
		};

		pokemonsArray.push(pokemon);

		if (evolution.evolves_to.length === 0) {
			return;
		}

		evolution.evolves_to.forEach((childEvolution) => {
			buildEvolutionChainRec(childEvolution, pokemonsArray);
		});
	}

	useEffect(() => {
		const pokemonsArray: IPokemon[] = [];
		buildEvolutionChainRec(evolution, pokemonsArray);
		setEvolutionChain(pokemonsArray);
	}, [evolution]);

	return { evolutionChain };
};
