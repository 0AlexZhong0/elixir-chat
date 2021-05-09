import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, ViewProps } from "react-native";

import Row from "../Row";
import Avatar from "../Avatar";
import AppText from "../AppText";

export type ChatHeaderProps = {
	title: string;
	thumbnail: string;
	onBackArrowPress: () => void;
} & ViewProps;

const ChatHeader = ({
	title,
	thumbnail,
	onBackArrowPress,
	...props
}: ChatHeaderProps) => {
	return (
		<Row {...props} style={[styles.container, props.style]}>
			<Ionicons
				size={30}
				style={styles.arrow}
				name="arrow-back"
				onPress={onBackArrowPress}
			/>
			<Avatar
				touchableOpacityProps={{ style: styles.avatar }}
				size="xs"
				source={{ uri: thumbnail }}
			/>
			<AppText style={styles.title} size="lg">
				{title}
			</AppText>
		</Row>
	);
};

const styles = StyleSheet.create({
	arrow: {
		paddingLeft: 6,
		paddingRight: 12,
	},
	avatar: {
		marginRight: 12,
	},
	title: {
		fontWeight: "bold",
	},
	container: {
		padding: 6,
	},
});

export default ChatHeader;
