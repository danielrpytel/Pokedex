import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEvolution } from "../../hooks/useEvolution";
import EvolutionCard from "./EvolutionCard";

export interface IEvolution {
	species: {
		url: string;
		name: string;
	};
	evolves_to: IEvolution[];
}

export interface IPokemonEvolutionProps {
	evolution: IEvolution | undefined;
	type: any[] | undefined;
}

function PokemonEvolution(props: IPokemonEvolutionProps) {
	const { evolution, type } = props;
	const { evolutionChain } = useEvolution(evolution || ({} as IEvolution));

	return (
		<div className="w-full rounded-lg bg-slate-800 p-6 shadow-lg">
			<div className="mb-3">
				<h2 className="text-xl text-slate-300">Evolutions</h2>
			</div>
			{evolutionChain?.length === 1 && (
				<div>
					<h2 className="text-lg text-slate-300">
						This Pokemon does not evolve
					</h2>
				</div>
			)}
			<div className="flex flex-col justify-center md:flex-row">
				{evolutionChain?.map((pokemon, indx, arr) => {
					return (
						<div
							key={indx}
							className="flex flex-col items-center justify-center md:flex-row"
						>
							<EvolutionCard {...pokemon} type={type} />
							{indx !== arr.length - 1 && (
								<div className="mx-auto flex">
									<RiArrowRightSLine className="rotate-90 text-8xl text-white md:rotate-0" />
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default PokemonEvolution;
