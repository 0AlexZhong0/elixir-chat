import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import SearchBar from "../SearchBar";

import ConversationItem, { ConversationItemProps } from "./ConversationItem";

type ChatsProps = {
	chats: ConversationItemProps[];
};

const renderConversationItem = ({
	item,
}: ListRenderItemInfo<ConversationItemProps>) => <ConversationItem {...item} />;

const ListHeaderComponent = () => (
	<SearchBar
		touchable
		showIcon
		style={styles.listHeader}
		placeholder="Search..."
	/>
);

const ConversationItemKeyExtractor = (
	ConversationItem: ConversationItemProps,
	idx: number
) => ConversationItem.lastReceivedTime + idx;

const Conversations = ({ chats }: ChatsProps) => (
	<FlatList
		data={chats}
		showsVerticalScrollIndicator={false}
		showsHorizontalScrollIndicator={false}
		renderItem={renderConversationItem}
		ListHeaderComponent={ListHeaderComponent}
		keyExtractor={ConversationItemKeyExtractor}
	/>
);

const styles = StyleSheet.create({
	listHeader: {
		marginBottom: 8,
	},
});

export default Conversations;
