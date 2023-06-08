import React from "react";

export interface IPokemonImg {
	name: string | undefined;
	img: string | undefined;
	imgSize: string | undefined;
	imgColor: string | undefined | null;
}

const PokemonImg = (props: IPokemonImg) => {
	const { name, img, imgSize, imgColor } = props;

	return (
		<div
			className="mx-auto flex h-96 w-96 rounded-lg shadow-lg md:mx-0 md:ml-auto"
			style={{ backgroundColor: imgColor || "" }}
		>
			<img
				className="m-auto"
				style={{ width: imgSize, height: imgSize }}
				src={img}
				alt={name}
			/>
		</div>
	);
};

export default PokemonImg;
