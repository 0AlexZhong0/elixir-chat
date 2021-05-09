import { StyleSheet, View } from "react-native";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { GiftedChat, IMessage, Send } from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Ionicon from "react-native-vector-icons/Ionicons";
import generateChatHeaderProps from "../../data/chat/generateChatHeaderProps";
import generateIMessage from "../../data/chat/generateIMessage";
import AccessoryBar from "./AccessoryBar";
import ChatHeader from "./ChatHeader";
import { useNavigation, useRoute } from "@react-navigation/core";

const renderSend = (props: Send["props"]) => (
	<Send {...props} containerStyle={{ justifyContent: "center" }}>
		<Ionicon style={styles.send} size={24} name="send" />
	</Send>
);

const scrollToBottomComponent = () => (
	<View>
		<Ionicon name="arrow-down" size={24} />
	</View>
);

const Chats = () => {
	const route = useRoute();
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();
	const headerProps = useMemo(generateChatHeaderProps, []);
	const [messages, setMessages] = useState<IMessage[]>([]);

	useEffect(() => {
		setMessages(
			Array(20)
				.fill(0)
				.map((_) => generateIMessage())
		);
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
	}, []);

	return (
		<View style={styles.container}>
			<ChatHeader
				{...headerProps}
				style={{ paddingTop: insets.top }}
				onBackArrowPress={navigation.goBack}
			/>
			<GiftedChat
				messages={messages}
				user={{
					_id: 1,
				}}
				scrollToBottom
				renderSend={renderSend}
				renderAccessory={AccessoryBar}
				onSend={(messages) => onSend(messages)}
				scrollToBottomComponent={scrollToBottomComponent}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	send: {
		paddingRight: 4,
	},
});
export default Chats;
