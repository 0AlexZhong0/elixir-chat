import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Row from "../components/Row";
import Conversations from "../components/conversation/Conversations";
import { generateConversationItemProps } from "../data/conversation/generateConversationItemProps";
import Avatar from "../components/Avatar";
import variables from "../const/variables";
import AppText from "../components/AppText";

const ConversationScreen = () => {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={{
				flex: 1,
				paddingHorizontal: 8,
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
			}}
		>
			<Row style={styles.header}>
				{/* TODO: should use the image from the current user */}
				<Avatar size="xs" source={{ uri: variables.image }} />
				<AppText size="xl" style={styles.title}>
					Chats
				</AppText>
			</Row>
			<Conversations
				chats={Array(24)
					.fill(0)
					.map((_) => generateConversationItemProps())}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		paddingVertical: 8,
	},
	title: {
		paddingLeft: 8,
		fontWeight: "bold",
	},
});

export default ConversationScreen;
