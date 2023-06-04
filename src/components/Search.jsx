import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { validateSearch } from "../utils/validateSearch";

function Search() {
	const [searchPoke, setSearchPoke] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const navigate = useNavigate();

	const handleSearch = useCallback(() => {
		setErrorMsg("");
		const validateReturn = validateSearch(searchPoke);
		console.log(validateReturn);

		if (!validateReturn["validate"]) {
			setErrorMsg(validateReturn["message"]);
			return;
		}

		navigate(`/details/${validateReturn["search"]}`);
	}, [searchPoke, navigate]);

	const handleSearchChange = (event) => {
		setSearchPoke(event.target.value);
	};

	return (
		<div className="w-full bg-slate-800">
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-1/2">
					<div className="flex justify-center md:justify-end my-3">
						<div className="flex flex-col">
							<h3 className="text-2xl text-slate-200">Name or Number</h3>
							<div className="flex my-4">
								<div className="flex space-x-4">
									<input
										type="text"
										onChange={handleSearchChange}
										className="block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-red-500 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
										placeholder="Search..."
									/>
									<button
										onClick={handleSearch}
										className="px-4 text-white bg-red-500 rounded-md hover:bg-red-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 h-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</button>
								</div>
							</div>
							<p className="text-xl text-red-400">{errorMsg}</p>
						</div>
					</div>
				</div>

				<div className="w-full md:w-1/2 mb-4 md:my-auto md:ml-10">
					<div className="w-3/6 mx-auto md:w-4/6 p-3 bg-green-600 rounded-lg">
						<p className="text-xl text-slate-200">
							Search for a Pokémon by name or using its National Pokédex number.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Search;
