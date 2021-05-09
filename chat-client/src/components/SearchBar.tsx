import React from "react";
import brands from "../styles/brands";
import Ionicon from "react-native-vector-icons/Ionicons";
import { StyleSheet, TextInputProps, TextInput } from "react-native";

import Row from "./Row";
import AppText from "./AppText";
import appStyles from "../styles";

type SearchBarProps = TextInputProps & {
	touchable?: boolean;
	showIcon?: boolean;
};

const SearchBar = ({ touchable, showIcon, ...props }: SearchBarProps) => {
	const styles = getStyles(showIcon);

	return (
		<Row activeOpacity={0.8} touchable={touchable}>
			{showIcon && (
				<Ionicon style={styles.searchIcon} name="search-outline" size={20} />
			)}
			{!touchable ? (
				<TextInput {...props} style={[styles.bar, props.style]} />
			) : (
				<Row {...props} style={[styles.bar, props.style]}>
					<AppText style={appStyles.placeholder}>{props.placeholder}</AppText>
				</Row>
			)}
		</Row>
	);
};

const getStyles = (hasIcon?: boolean) =>
	StyleSheet.create({
		bar: {
			padding: 12,
			width: "100%",
			borderRadius: 24,
			paddingLeft: hasIcon ? "12.5%" : undefined,
			backgroundColor: brands.colours.facebook.lightGray,
		},
		searchIcon: {
			left: 8,
			zIndex: 1,
			alignSelf: "center",
			position: "absolute",
		},
	});

export default SearchBar;
