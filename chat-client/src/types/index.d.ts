import { ChatHeaderProps } from "../components/chat/ChatHeader";

// navigation
export type RootStackParamList = {
	Conversations: undefined;
	Chats: { thumbnail: string; title: string };
};
