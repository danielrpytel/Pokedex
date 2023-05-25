function HeaderName({ name, id }) {
	return (
		<div className="flex w-full">
			<div className="flex mx-auto my-4 text-3xl">
				<h1 className="text-white">{name}</h1>
				<h1 className="mx-5 text-slate-300">#{id}</h1>
			</div>
		</div>
	);
}

export default HeaderName;
