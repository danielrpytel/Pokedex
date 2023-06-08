import React from "react";
import { Link } from "react-router-dom";

export interface IPokemon {
	id: string;
	nameUrl: string;
	name: string;
	pictureUrl: string;
}

const EvolutionCard = (props: IPokemon & { type: any[] | undefined }) => {
	const { id, nameUrl, name, pictureUrl, type } = props;
	return (
		<div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
			<Link to={`/details/${nameUrl}`}>
				<div className={`${type?.[0]?.type.name}`}>
					<img className="h-52" src={pictureUrl} alt={name} />
				</div>
				<div className="bg-white">
					<div className="px-4 pt-2">
						<p className="text-lg">#{id}</p>
					</div>
					<div className="px-4 py-2">
						<p className="text-2xl font-bold">{name}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default EvolutionCard;
