import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";

type SendPayload =
	| { location: { latitude: number; longitude: number } }
	| { image: string };

export type SendHanlder = (payload: SendPayload[]) => void;

export async function getLocationAsync(onSend: SendHanlder) {
	if (await Location.requestBackgroundPermissionsAsync()) {
		const location = await Location.getCurrentPositionAsync({});

		if (location) {
			onSend([{ location: location.coords }]);
		}
	}
}

export async function pickImageAsync(onSend: SendHanlder) {
	if (await ImagePicker.requestMediaLibraryPermissionsAsync()) {
		const result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3],
		});

		if (!result.cancelled) {
			onSend([{ image: result.uri }]);
			return result.uri;
		}
	}
}

export async function takePictureAsync(onSend: SendHanlder) {
	if (await ImagePicker.requestCameraPermissionsAsync()) {
		const result = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [4, 3],
		});

		if (!result.cancelled) {
			onSend([{ image: result.uri }]);
			return result.uri;
		}
	}
}
