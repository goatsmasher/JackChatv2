import $ from "jquery";
import {ElementComponent} from "../../lib/component";

export class ChatFormComponent extends ElementComponent {
    constructor() {
        super("div");
        this.$element.addClass("chat-form");
    }

    _onAttach(){
        this._$input = $(`<input type="text" clas="chat-input" />`).appendTo(this.$element);
    }
}