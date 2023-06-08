import React from "react";
import { useSearch } from "../hooks/useSearch";

function Search() {
	const { errorMsg, handleSearch, handleSearchChange } = useSearch();

	return (
		<div className="w-full bg-slate-800">
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-1/2">
					<div className="my-3 flex justify-center md:justify-end">
						<div className="flex flex-col">
							<h3 className="text-2xl text-slate-200">Name or Number</h3>
							<div className="my-4 flex">
								<div className="flex space-x-4">
									<input
										name="search"
										type="text"
										onChange={handleSearchChange}
										className="block w-full rounded-md border bg-white px-4 py-2 text-black focus:border-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40"
										placeholder="Search..."
									/>
									<button
										name="submit-search"
										onClick={handleSearch}
										className="rounded-md bg-red-500 px-4 text-white hover:bg-red-400"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
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

				<div className="mb-4 w-full md:my-auto md:ml-10 md:w-1/2">
					<div className="mx-auto w-3/6 rounded-lg bg-green-600 p-3 md:w-4/6">
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
