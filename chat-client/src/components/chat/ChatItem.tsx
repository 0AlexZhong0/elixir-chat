import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

import Row from "../Row";
import Avatar from "../Avatar";
import AppText from "../AppText";

export type ChatItemProps = {
	title: string;
	thumbnail: string;
	lastReceivedMsg: string;
	// unix timestamp in seconds
	lastReceivedTime: string;
} & ViewProps;

const ChatItem = ({
	title,
	thumbnail,
	lastReceivedMsg,
	lastReceivedTime,
	...props
}: ChatItemProps) => {
	return (
		<Row {...props}>
			<Avatar
				source={{ uri: thumbnail }}
				touchableOpacityProps={{ style: { padding: 6 } }}
			/>
			<View>
				<AppText size="lg">{title}</AppText>
				<Row>
					<AppText size="xs" numberOfLines={1} style={styles.lastReceivedMsg}>
						{lastReceivedMsg}
					</AppText>
					<AppText size="xs"> - {lastReceivedTime}</AppText>
				</Row>
			</View>
		</Row>
	);
};

const styles = StyleSheet.create({
	lastReceivedMsg: {
		maxWidth: "65%",
	},
});

export default ChatItem;
