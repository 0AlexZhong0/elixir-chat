import dayjs from "dayjs";
import faker from "faker";

import variables from "../../const/variables";
import { ChatItemProps } from "../../components/chat/ChatItem";

export const generateChatItemProps = (): ChatItemProps => ({
	thumbnail: variables.image,
	title: faker.internet.userName(),
	lastReceivedTime: dayjs().format("DD/MM/YY"),
	lastReceivedMsg: faker.lorem.paragraph(),
});
