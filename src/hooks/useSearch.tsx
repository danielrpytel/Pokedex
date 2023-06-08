import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSearch } from "../utils/validateSearch";

export const useSearch = () => {
	const [searchPoke, setSearchPoke] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const navigate = useNavigate();

	const handleSearch = useCallback(() => {
		setErrorMsg("");
		const validateReturn = validateSearch(searchPoke);

		if (!validateReturn["validate"]) {
			setErrorMsg(validateReturn["message"]);
			return;
		}

		navigate(`/details/${validateReturn["search"]}`);
	}, [searchPoke, navigate]);

	const handleSearchChange = (event: any) => {
		setSearchPoke(event.target.value);
	};

	return { errorMsg, handleSearch, handleSearchChange };
};
