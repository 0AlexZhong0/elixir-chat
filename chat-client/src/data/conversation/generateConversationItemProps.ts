import dayjs from "dayjs";
import faker from "faker";
import { v4 as uuidV4 } from "uuid";
import variables from "../../const/variables";
import { ConversationItemProps } from "../../components/conversation/ConversationItem";

export const generateConversationItemProps = (): ConversationItemProps => ({
	channelId: uuidV4(),
	thumbnail: variables.image,
	title: faker.internet.userName(),
	lastReceivedTime: dayjs().format("DD/MM/YY"),
	lastReceivedMsg: faker.lorem.paragraph(),
});
