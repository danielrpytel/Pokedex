import React from "react";
import { getStatPercHeight } from "../../utils/statPercHeight";

export interface IPokemonStats {
	stats: any[] | undefined | null;
	type: any[] | undefined | null;
}

const PokemonStats = (props: IPokemonStats) => {
	const { stats, type } = props;

	return (
		<div className="flex w-full flex-col rounded-lg bg-slate-800 p-3 shadow-lg md:p-6">
			<div className="mb-3">
				<h2 className="text-xl text-slate-300">Stats</h2>
			</div>
			<div className="flex flex-row justify-between">
				{stats?.map((element) => (
					<div key={element.stat.name} className="w-12 md:w-24">
						<div className="relative h-52 rounded-lg bg-slate-500">
							<div
								className={`absolute bottom-0 w-full rounded-md ${
									type?.[0]?.type.name || ""
								}`}
								style={{ height: getStatPercHeight(element) }}
							>
								<div className="absolute inset-x-0 bottom-0 mb-5 text-center">
									<h2 className="text-xs md:text-xl">{element.base_stat}</h2>
								</div>
							</div>
						</div>
						<div className="mt-3 w-full text-center">
							<h3 className="inline-block text-slate-300">
								{element.stat.name}
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PokemonStats;
