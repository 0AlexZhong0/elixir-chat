import { RFValue } from "react-native-responsive-fontsize";

const typography = {
	XSMALL: RFValue(14),
	SMALL: RFValue(16),
	MEDIUM: RFValue(18),
	LARGE: RFValue(22),
	XLARGE: RFValue(24),
	XXLARGE: RFValue(28),
	XXXLARGE: RFValue(32),
	XXXXLARGE: RFValue(38),
};

export type TypographySize =
	| `xs`
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "xxl"
	| "xxxl"
	| "xxxxl";

export const getTypographySize = (size?: TypographySize) => {
	switch (size) {
		case "xs":
			return typography.XSMALL;
		case "sm":
			return typography.SMALL;
		case "md":
			return typography.MEDIUM;
		case "lg":
			return typography.LARGE;
		case "xl":
			return typography.XLARGE;
		case "xxl":
			return typography.XXLARGE;
		case "xxxl":
			return typography.XXXLARGE;
		case "xxxxl":
			return typography.XXXXLARGE;
		default:
			return typography.MEDIUM;
	}
};

const brands = {
	typography,
	colours: {
		white: "#fff",
	},
};

export default brands;
