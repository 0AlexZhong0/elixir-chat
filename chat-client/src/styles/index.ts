import { StyleSheet } from "react-native";

import brands from "./brands";

export default StyleSheet.create({
	row: {
		alignItems: "center",
		flexDirection: "row",
	},
	placeholder: {
		color: brands.colours.placeholder,
	},
	shadow: {
		elevation: 4,
		shadowRadius: 2.2,
		shadowOpacity: 0.22,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
	},
});
