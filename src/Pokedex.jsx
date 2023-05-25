import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import PokemonList from "./pages/PokemonList";
import Details from "./pages/Details";

function Pokedex() {
	return (
		<div className="w-screen h-screen bg-slate-500">
			<HashRouter>
				<Header />
				<div className="flex item-center justify-center">
					<div className="page-width bg-slate-600">
						<Routes>
							<Route exact path="" element={<PokemonList />} />
							<Route path="/details/:name" element={<Details />} />
						</Routes>
					</div>
				</div>
			</HashRouter>
		</div>
	);
}

export default Pokedex;
