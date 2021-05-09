import React from "react";
import { Text, TextProps } from "react-native";

import { TypographySize, getTypographySize } from "../styles/brands";

const AppText = ({
	children,
	style,
	size,
	...params
}: TextProps & { children: React.ReactNode; size?: TypographySize }) => {
	return (
		<Text
			{...params}
			style={[
				{
					fontSize: getTypographySize(size),
				},
				style,
			]}
		>
			{children}
		</Text>
	);
};

export default AppText;
