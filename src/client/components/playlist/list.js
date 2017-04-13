import $ from "jquery";
import {ElementComponent} from "../../lib/component";
import {PlayListSortComponent} from "./sort";

export class PlaylistListComponent extends ElementComponent {
    constructor() {
        super("ul");
        this.$element.addClass("playlist-list");
    }

    _onAttach() {
        const sort = new PlayListSortComponent();
        sort.attach(this._$mount);
        this.children.push(sort);
    }
}