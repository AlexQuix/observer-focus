import Focus from "./utils/focus";
import {putStructureElement} from './utils/container'
import {queryDocument} from "./utils/utils";

function commenceApp() {
    let contCommand = putStructureElement(queryDocument(".wrapper-observer-focus"));
    let focus = new Focus(contCommand);
    window.onscroll = focus.verifyFocus.bind(focus);
}
window.addEventListener("load", commenceApp);