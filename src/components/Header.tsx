import React from "react";

import Balbasaur from "../images/balbasaur.png";
import Squirtle from "../images/squirtle.png";

import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<div className="flex h-24 w-full bg-red-500 drop-shadow-lg">
				<Link className="mx-auto flex" to="/">
					<div className="my-2 h-20 w-20">
						<img
							className="w-18 h-18 object-cover"
							src={Balbasaur}
							alt="Balbasaur png"
						/>
					</div>
					<div className="my-auto mx-8">
						<h1 className="font-sans text-2xl text-white">Pokédex</h1>
					</div>
					<div className="my-2 h-20 w-20">
						<img
							className="w-18 h-18 object-cover"
							src={Squirtle}
							alt="Squirtle png"
						/>
					</div>
				</Link>
			</div>
		</header>
	);
}

export default Header;
