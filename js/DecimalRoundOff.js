const decimalRoundOff = (variable, digits) => {
	return variable.toLocaleString("fullwide", {
		maximumFractionDigits: digits,
	});
};

export default decimalRoundOff;
