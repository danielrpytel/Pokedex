import React from "react";

export interface IHeader {
	name: string | undefined | null;
	id: string | undefined | null;
}

const HeaderName = (props: IHeader) => {
	return (
		<div className="flex w-full">
			<div className="mx-auto my-4 flex text-3xl">
				<h1 className="text-white">{props.name}</h1>
				<h1 className="mx-5 text-slate-300">#{props.id}</h1>
			</div>
		</div>
	);
};

export default HeaderName;
