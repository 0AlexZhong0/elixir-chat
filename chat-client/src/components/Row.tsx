import React from "react";

import {
	View,
	StyleSheet,
	ViewProps,
	TouchableOpacityProps,
	TouchableOpacity,
} from "react-native";

type RowProps = (ViewProps | TouchableOpacityProps) & {
	touchable?: boolean;
	children?: React.ReactNode;
};

const Row = ({ children, touchable, ...props }: RowProps) =>
	!touchable ? (
		<View {...props} style={[styles.row, props.style]}>
			{children}
		</View>
	) : (
		<TouchableOpacity {...props} style={[styles.row, props.style]}>
			{children}
		</TouchableOpacity>
	);

const styles = StyleSheet.create({
	row: {
		width: "100%",
		alignItems: "center",
		flexDirection: "row",
	},
});

export default Row;
