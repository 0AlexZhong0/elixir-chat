import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import ChatItem, { ChatItemProps } from "./ChatItem";

type ChatsProps = {
	chats: ChatItemProps[];
};

const renderChatItem = ({
	item: chatItem,
}: ListRenderItemInfo<ChatItemProps>) => <ChatItem {...chatItem} />;
const chatItemKeyExtractor = (chatItem: ChatItemProps, idx: number) =>
	chatItem.lastReceivedTime + idx;

const Chats = ({ chats }: ChatsProps) => (
	<FlatList
		data={chats}
		renderItem={renderChatItem}
		keyExtractor={chatItemKeyExtractor}
		showsHorizontalScrollIndicator={false}
		showsVerticalScrollIndicator={false}
	/>
);

export default Chats;
