import React from "react";
import { IconProps } from "react-native-vector-icons/Icon";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity, StyleSheet } from "react-native";

import {
	getLocationAsync,
	pickImageAsync,
	takePictureAsync,
} from "./mediaUtils";

import Row from "../Row";

const AccessoryBar = ({ onSend }: any) => {
	return (
		<Row style={styles.container}>
			<Button onPress={() => pickImageAsync(onSend)} name="photo" />
			<Button onPress={() => takePictureAsync(onSend)} name="photo-camera" />
			<Button onPress={() => getLocationAsync(onSend)} name="location-on" />
		</Row>
	);
};

const Button = ({
	onPress,
	size = 24,
	color = "rgba(0,0,0,0.5)",
	...props
}: IconProps) => (
	<TouchableOpacity onPress={onPress}>
		<MaterialIcons size={size} color={color} {...props} />
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-around",
	},
});

export default AccessoryBar;
