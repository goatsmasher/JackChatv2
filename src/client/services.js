import io from "socket.io-client";
import { ObservableSocket } from "shared/observable-socket.js";
import { UserStore } from "./stores/users";
import { ChatStore} from "./stores/chat";

export const socket = io({ autoConnect: false });
export const server = new ObservableSocket(socket);
export const usersStore = new UserStore(server);
export const chatStore = new ChatStore(server, usersStore); 