
export function getMToFtString(meterApi) {

    let meter = meterApi / 10;

    let inches = (meter * 39.3701).toFixed(0);
    let feet = Math.floor(inches / 12);
    inches %= 12;

    let heightString = `${feet}' ${inches}"`

    return heightString;
}