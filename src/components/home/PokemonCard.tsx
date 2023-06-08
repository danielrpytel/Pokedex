import React from "react";

import { Link } from "react-router-dom";

export interface IPokemonCard {
	id: string;
	name: string;
	img: string;
	imgSize: string;
	imgColor: string | null;
}

function PokemonCard(props: IPokemonCard) {
	const { id, img, name, imgSize, imgColor } = props;

	return (
		<Link to={`/details/${name}`}>
			<div className="max-w-xs overflow-hidden rounded bg-slate-300 shadow-lg">
				<div className="flex flex-col">
					<div
						className="flex h-80 w-full"
						style={{ backgroundColor: imgColor || undefined }}
					>
						<img
							className="m-auto"
							style={{ width: imgSize, height: imgSize }}
							src={img}
							alt={name}
						/>
					</div>
					<div className="px-4 pt-2">
						<p className="text-lg">#{id}</p>
					</div>
					<div className="px-4 py-2">
						<p className="text-2xl font-bold">
							{name.replace(/^./, (str: string) => str.toUpperCase())}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default PokemonCard;
