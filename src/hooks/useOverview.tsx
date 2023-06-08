import { useState, useEffect } from "react";

import { IOverview } from "../components/details/PokemonOverview";

export const useOverview = (props: IOverview) => {
	const { flavor_text_default, flavor_text_shield, flavor_text_sword, name } =
		props;

	const [version, setVersion] = useState<string>("sword");
	const [overview, setOverview] = useState<string | null>("");
	const [showButtons, setShowButtons] = useState<boolean>(true);

	useEffect(() => {
		const getText = () => {
			if (flavor_text_sword === undefined && flavor_text_shield === undefined) {
				setShowButtons(false);
				return flavor_text_default;
			}
			if (version === "sword") return flavor_text_sword;
			return flavor_text_shield;
		};

		const overview = getText();
		if (overview === undefined) return;

		setOverview(overview);
		return () => {
			setShowButtons(true);
		};
	}, [version, name, flavor_text_sword, flavor_text_shield]);

	return { version, overview, showButtons, setVersion };
};
