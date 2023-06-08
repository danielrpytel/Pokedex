import React from "react";

export interface IPokemonInfo {
	height: string | undefined;
	weight: string | undefined;
	habitat: string | undefined;
	abilities: [] | undefined;
	capture_rate: number | undefined;
}

const PokemonInfo = (props: IPokemonInfo) => {
	const { height, weight, habitat, abilities, capture_rate } = props;
	return (
		<div className="mx-2 rounded-lg bg-slate-800 shadow-lg md:mx-14">
			<div className="flex flex-col">
				<div className="m-3 flex flex-row text-lg text-slate-300">
					<div className="w-1/2">
						<h3 className="">Height</h3>
						<h4 className="">{height}</h4>
					</div>

					<div className="w-1/2">
						<h3 className="">Weight</h3>
						<h4>{weight}</h4>
					</div>
				</div>
				<div className="m-3 flex flex-row text-lg text-slate-300">
					<div className="w-1/2">
						<h3 className="">Capture Rate</h3>
						<h4 className="">{capture_rate}%</h4>
					</div>

					<div className="w-1/2">
						<h3 className="">Habitat</h3>
						<h4>{habitat}</h4>
					</div>
				</div>
				<div className="m-3 flex text-lg text-slate-300">
					<div className="w-full">
						<h3 className="">Abilities</h3>
						<h4 className="">{abilities != null ? abilities : "-"}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonInfo;
