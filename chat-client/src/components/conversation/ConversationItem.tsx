import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

import Row from "../Row";
import Avatar from "../Avatar";
import AppText from "../AppText";
import { useNavigation } from "@react-navigation/core";

export type ConversationItemProps = {
	title: string;
	channelId: string;
	thumbnail: string;
	lastReceivedMsg: string;
	// unix timestamp in seconds
	lastReceivedTime: string;
} & ViewProps;

const ConversationItem = ({
	channelId,
	title,
	thumbnail,
	lastReceivedMsg,
	lastReceivedTime,
	...props
}: ConversationItemProps) => {
	const navigation = useNavigation();

	return (
		<Row
			{...props}
			touchable
			activeOpacity={0.8}
			onPress={() =>
				// TODO: define the specific type for the route parrams
				navigation.navigate("Chats", {
					title,
					channelId,
					thumbnail,
				})
			}
		>
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

export default ConversationItem;
