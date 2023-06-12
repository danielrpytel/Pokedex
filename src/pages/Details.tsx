import React from "react";
import { usePokemonDetails } from "../hooks/usePokemonDetails";

import HeaderName, { IHeader } from "../components/details/HeaderName";
import PokemonImg, { IPokemonImg } from "../components/details/PokemonImg";
import PokemonOverview, {
	IOverview,
} from "../components/details/PokemonOverview";
import PokemonInfo, { IPokemonInfo } from "../components/details/PokemonInfo";
import PokemonStats, {
	IPokemonStats,
} from "../components/details/PokemonStats";
import PokemonEvolution, {
	IEvolution,
	IPokemonEvolutionProps,
} from "../components/details/PokemonEvolution";
import Loading from "../components/Loading";

export interface IPokemonDetails {
	id: string;
	name: string;
	img: string;
	imgSize: string;
	imgColor: string | null;
	types: [];
	flavor_text_sword: string;
	flavor_text_shield: string;
	flavor_text_default: string;
	height: string;
	weight: string;
	abilities: [];
	capture_rate: number;
	habitat: string;
	stats: [];
	evolution: IEvolution;
}

const Details = () => {
	const { pokemonDetails, errorMsg, loading } = usePokemonDetails();

	const headerProps: IHeader = {
		name: pokemonDetails?.name,
		id: pokemonDetails?.id,
	};

	const statsProps: IPokemonStats = {
		stats: pokemonDetails?.stats,
		type: pokemonDetails?.types,
	};

	const imgProps: IPokemonImg = {
		name: pokemonDetails?.name,
		img: pokemonDetails?.img,
		imgSize: pokemonDetails?.imgSize,
		imgColor: pokemonDetails?.imgColor,
	};

	const infoProps: IPokemonInfo = {
		height: pokemonDetails?.height,
		weight: pokemonDetails?.weight,
		habitat: pokemonDetails?.habitat,
		abilities: pokemonDetails?.abilities,
		capture_rate: pokemonDetails?.capture_rate,
	};

	const overviewProps: IOverview = {
		flavor_text_sword: pokemonDetails?.flavor_text_sword,
		flavor_text_shield: pokemonDetails?.flavor_text_shield,
		flavor_text_default: pokemonDetails?.flavor_text_default,
		name: pokemonDetails?.name,
	};

	const evolutionProps: IPokemonEvolutionProps = {
		evolution: pokemonDetails?.evolution,
		type: pokemonDetails?.types,
	};

	if (errorMsg.length !== 0) {
		return (
			<div className="h-screen w-full py-5 text-center">
				<p className="text-3xl text-red-500">{errorMsg}</p>
			</div>
		);
	}

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className="flex flex-col">
					<HeaderName {...headerProps} />
					<div className="flex flex-col md:flex-row">
						<div className="md:w-1/2">
							<PokemonImg {...imgProps} />
						</div>
						<div className="md:w-1/2">
							<div className="mb-8 w-full">
								<PokemonOverview {...overviewProps} />
							</div>
							<div className="w-full">
								<PokemonInfo {...infoProps} />
							</div>
						</div>
					</div>
					<div className="mx-2 my-5 md:mx-14">
						<PokemonStats {...statsProps} />
					</div>
					<div className="mx-2 my-5 md:mx-14">
						<PokemonEvolution {...evolutionProps} />
					</div>
				</div>
			)}
		</>
	);
};

export default Details;
