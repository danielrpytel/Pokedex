import { useState, useEffect } from "react";

import RedPokeball from "../../images/red-pokebal.png";
import BluePokeball from "../../images/blue-pokebal.png";

function PokemonOverview({
	flavor_text_sword,
	flavor_text_shield,
	flavor_text_default,
	name,
}) {
	const [version, setVersion] = useState("sword");
	const [overview, setOvierview] = useState("");

	const getText = () => {
		let text = "";
		if (flavor_text_sword === "" && flavor_text_shield === "") {
			text = flavor_text_default;
		} else if (version === "sword") {
			text = flavor_text_sword;
		} else {
			text = flavor_text_shield;
		}
		return text;
	};

	useEffect(() => {
		setOvierview(getText());
	}, [version, name]);

	return (
		<div className="flex flex-col w-full">
			<div className="mx-3 mb-5 mt-5 md:mt-0 md:mx-14">
				<div className="mr-auto">
					<h3 className="text-xl text-slate-300">{overview}</h3>
				</div>
			</div>
			<div
				className="flex flex-row mx-auto md:mx-14"
				style={
					flavor_text_shield === "" && flavor_text_sword === ""
						? { display: "none" }
						: { display: "flex" }
				}
			>
				<div className="mr-6">
					<button className="w-10 h-10" onClick={() => setVersion("sword")}>
						<img src={BluePokeball} alt="Overview Sword" />
					</button>
				</div>
				<div>
					<button className="w-10 h-10" onClick={() => setVersion("shield")}>
						<img src={RedPokeball} alt="Overview Shield" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default PokemonOverview;
