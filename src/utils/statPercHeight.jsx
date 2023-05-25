export function getStatPercHeight(statApi) {
	const maxStats = {
		hp: 255,
		attack: 190,
		defense: 250,
		"special-attack": 194,
		"special-defense": 250,
		speed: 200,
	};

	let statValue = statApi.base_stat;
	let maxStatValue = maxStats[statApi.stat.name];

	let percantage = (statValue / maxStatValue) * 100;
	let statString = `${percantage}%`;

	return statString;
}
