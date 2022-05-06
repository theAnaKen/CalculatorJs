export default function removeComma(str) {
	if (str.includes(",")) {
		return (str = str.replace(/,/g, ""));
	} else {
		return str;
	}
}
