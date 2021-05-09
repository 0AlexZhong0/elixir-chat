import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import ConversationItem, { ConversationItemProps } from "./ConversationItem";

type ChatsProps = {
	chats: ConversationItemProps[];
};

const renderConversationItem = ({
	item,
}: ListRenderItemInfo<ConversationItemProps>) => <ConversationItem {...item} />;

const ConversationItemKeyExtractor = (
	ConversationItem: ConversationItemProps,
	idx: number
) => ConversationItem.lastReceivedTime + idx;

const Conversations = ({ chats }: ChatsProps) => (
	<FlatList
		data={chats}
		renderItem={renderConversationItem}
		keyExtractor={ConversationItemKeyExtractor}
		showsVerticalScrollIndicator={false}
		showsHorizontalScrollIndicator={false}
	/>
);

export default Conversations;
