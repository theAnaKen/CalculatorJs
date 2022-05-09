const removeComma = (str) => {
	if (str.includes(",")) {
		return (str = str.replace(/,/g, ""));
	}
	return str;
};

export default removeComma;
