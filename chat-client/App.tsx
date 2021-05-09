import faker from "faker";
import { Channel } from "phoenix";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from "react-native-safe-area-context";

import socket from "./src/services/socket";
import Chats from "./src/components/chat/Chats";
import { generateChatItemProps } from "./src/data/chat/generateChatItemProps";

const App = () => {
	return (
		<SafeAreaProvider>
			<AppChildren />
		</SafeAreaProvider>
	);
};

function AppChildren() {
	const chanRef = useRef<Channel>();
	const insets = useSafeAreaInsets();

	const onSend = useCallback(() => {
		chanRef.current?.push("new_msg", {
			body: {
				text: faker.lorem.words(),
			},
		});
	}, [chanRef]);

	useEffect(() => {
		chanRef.current = socket.channel("conversation:1");
		chanRef.current.join();
		chanRef.current.on("new_msg", console.log);
	}, []);

	return (
		<View style={[styles.container, { paddingTop: insets.top }]}>
			<StatusBar style="auto" />
			<Chats
				chats={Array(14)
					.fill(0)
					.map((_) => generateChatItemProps())}
			/>
			<Button title="Send a message" onPress={onSend} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
