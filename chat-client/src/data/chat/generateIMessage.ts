import faker from "faker";
import variables from "../../const/variables";
import { IMessage } from "react-native-gifted-chat";
import { getRandomIntInclusive } from "../../utils";

const generateIMessage = (): IMessage => ({
	_id: getRandomIntInclusive(0, Math.pow(10, 6)),
	text: faker.lorem.words(),
	createdAt: new Date(),
	user: {
		_id: getRandomIntInclusive(0, Math.pow(10, 6)),
		name: faker.name.firstName(),
		avatar: variables.image,
	},
});

export default generateIMessage;
