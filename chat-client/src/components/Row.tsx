import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

type RowProps = ViewProps & { children?: React.ReactNode };

const Row = ({ children, ...props }: RowProps) => (
	<View {...props} style={[styles.row, props.style]}>
		{children}
	</View>
);

const styles = StyleSheet.create({
	row: {
		width: "100%",
		alignItems: "center",
		flexDirection: "row",
	},
});

export default Row;
