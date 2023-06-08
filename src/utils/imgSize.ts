export const getImgSize = (height: number) => {
	let size = "100%";

	if (height >= 16) {
		return size;
	} else if (height >= 11) {
		size = "85%";
		return size;
	} else {
		size = "65%";
		return size;
	}
};
