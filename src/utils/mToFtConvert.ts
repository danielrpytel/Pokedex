export function getMToFtString(meterApi: number): string {
	const meter = meterApi / 10;

	const inches = Number((meter * 39.3701).toFixed(0));
	const feet = Math.floor(inches / 12);
	const remainingInches = inches % 12;

	const heightString = `${feet}' ${remainingInches}"`;

	return heightString;
}
