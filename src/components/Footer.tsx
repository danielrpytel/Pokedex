import React from "react";

const Footer = () => {
	return (
		<footer className=" flex h-24 w-full items-center justify-center bg-slate-800">
			<div className="flex flex-col text-slate-300">
				<div className="mx-auto mb-2 text-xl">
					Designed and Developed by Daniel Pytel
				</div>
				<div className="mx-auto text-lg">
					View code on:{" "}
					<a
						className="hover:text-blue-500"
						href="https://github.com/danielrpytel/pokedex"
					>
						GitHub
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
