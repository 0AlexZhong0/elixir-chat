import {
	Image,
	ImageProps,
	StyleSheet,
	TouchableOpacityProps,
	TouchableOpacity,
	useWindowDimensions,
} from "react-native";
import React from "react";
import brands from "../styles/brands";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

type AvatarProps = ImageProps & {
	size?: Size;
	transparent?: boolean;
	dimensionScale?: number;
	touchableOpacityProps?: TouchableOpacityProps;
};

/**
 * Get scale factor in proportion to the dimension of the screen
 * @param size
 */
export const getScale = (size?: Size) => {
	switch (size) {
		case "xs":
			return 0.15;
		case "sm":
			return 0.25;
		case "md":
			return 0.35;
		case "lg":
			return 0.45;
		case "xl":
			return 0.55;
		default:
			return 0.2;
	}
};

const Avatar = (props: AvatarProps) => {
	const { width } = useWindowDimensions();
	const {
		size,
		touchableOpacityProps,
		dimensionScale,
		transparent,
		...imageProps
	} = props;

	// avatar is round, so it should have the same width and the height
	const dimensions = {
		width: width * (dimensionScale || getScale(size)),
		height: width * (dimensionScale || getScale(size)),
	};

	const backgroundColor = {
		backgroundColor: !transparent ? brands.colours.white : undefined,
	};

	return (
		<TouchableOpacity
			{...touchableOpacityProps}
			activeOpacity={touchableOpacityProps?.activeOpacity || 1}
			style={[
				styles.imgContainer,
				dimensions,
				backgroundColor,
				touchableOpacityProps?.style,
			]}
		>
			<Image {...imageProps} style={[styles.img, imageProps.style]} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	imgContainer: {
		borderRadius: 9999,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: brands.colours.white,
	},
	img: {
		width: "100%",
		height: "100%",
		borderRadius: 9999,
	},
});

export default Avatar;
