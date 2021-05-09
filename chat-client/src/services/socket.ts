import { Socket } from "phoenix";

const socketUrl = "ws://192.168.1.160:4000/socket";
const socket = new Socket(socketUrl);

socket.connect();

export default socket;
