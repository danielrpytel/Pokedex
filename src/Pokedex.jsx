import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Search from "./components/Search";

function Pokedex() {
	return (
		<div className="h-screen w-screen bg-slate-500">
			<HashRouter>
				<Header />
				<div className="item-center flex justify-center">
					<div className="page-width bg-slate-600">
						<Search />
						<Routes>
							<Route exact path="" element={<Home />} />
							<Route path="/details/:name" element={<Details />} />
						</Routes>
					</div>
				</div>
			</HashRouter>
		</div>
	);
}

export default Pokedex;
