import React from "react";
import { useOverview } from "../../hooks/useOverview";

import RedPokeball from "../../images/red-pokebal.png";
import BluePokeball from "../../images/blue-pokebal.png";

export interface IOverview {
	flavor_text_sword: string | undefined;
	flavor_text_shield: string | undefined;
	flavor_text_default: string | undefined;
	name: string | undefined;
}

const PokemonOverview = (props: IOverview) => {
	const { overview, showButtons, setVersion } = useOverview(props);

	return (
		<div className="flex w-full flex-col">
			<div className="mx-3 mb-5 mt-5 md:mx-14 md:mt-0">
				<div className="mr-auto">
					<h3 className="text-xl text-slate-300">{overview}</h3>
				</div>
			</div>
			<div
				className="mx-auto flex flex-row md:mx-14"
				style={showButtons ? { display: "flex" } : { display: "none" }}
			>
				<div className="mr-6">
					<button
						className="h-10 w-10"
						onClick={() => setVersion("sword" as string)}
					>
						<img src={BluePokeball} alt="Overview Sword" />
					</button>
				</div>
				<div>
					<button
						className="h-10 w-10"
						onClick={() => setVersion("shield" as string)}
					>
						<img src={RedPokeball} alt="Overview Shield" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PokemonOverview;
