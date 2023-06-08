export function getKgToLbString(kgApi: number) {
	let kg = kgApi / 10;
	let lb = (kg * 2.20462).toFixed(1);

	let weightString = `${lb} lb`;

	return weightString;
}
