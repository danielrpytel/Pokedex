export function validateSearch(searchInput: string) {
	const pokemonMax = 1008;

	const validateReturn = {
		validate: false,
		message: "",
		search: "",
	};

	function containsOnlyNumbers(str: string) {
		return /^\d+$/.test(str);
	}

	function hasSpecialSymbol(str: string) {
		const pattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
		return pattern.test(str);
	}

	if (!containsOnlyNumbers(searchInput)) {
		if (hasSpecialSymbol(searchInput)) {
			validateReturn["validate"] = false;
			validateReturn["message"] = "Cannot hava any special character";
			return validateReturn;
		}
		validateReturn["validate"] = true;
		validateReturn["search"] = searchInput.toLowerCase();
		return validateReturn;
	}

	const id = parseInt(searchInput);

	if (id > pokemonMax) {
		validateReturn["validate"] = false;
		validateReturn["message"] = "There are 1008 pokemons";
		return validateReturn;
	}

	validateReturn["validate"] = true;
	validateReturn["search"] = id.toString();
	return validateReturn;
}
