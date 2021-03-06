import $ from "jquery";
import "shared/operators";
import "./application.scss";
import * as services from "./services";


// Playgroud
services.server.emitAction$("login", { username: "foo", password: "bar" })
    .subscribe(result => {
        if (result.error) {
            console.log(result.error);
        }
        else {
            console.log("Logged In: " + result);
        }
    });
// Auth
const $html = $("html");
services.usersStore.currentUser$.subscribe(user => {
    if (user.isLoggedIn) {
        $html.removeClass("not-logged-in");
        $html.addClass("logged-in");
    }
    else {
        $html.addClass("not-logged-in");
        $html.removeClass("logged-in");

    }
});

// Components
require("./components/player/player.js");
require("./components/users/users.js");
require("./components/chat/chat.js");
require("./components/playlist/playlist.js");

// Bootstrap
services.socket.connect();
