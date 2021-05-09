import faker from "faker";
import { ChatHeaderProps } from "../../components/chat/ChatHeader";
import variables from "../../const/variables";

const generateChatHeaderProps = (): Pick<
	ChatHeaderProps,
	"title" | "thumbnail"
> => ({
	title: faker.name.firstName(),
	thumbnail: variables.image,
});

export default generateChatHeaderProps;
