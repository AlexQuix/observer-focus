import Focus from "./utils/focus";
import {putStructureElement} from './utils/container'
import {queryDocument} from "./utils/utils";

function changeStructureElement(query:string = ".wrapper-observer-focus"):HTMLObserverFocusElement[]{
    let wrapperFocus = putStructureElement(queryDocument(query));
    return wrapperFocus;
}
function executeFocus(wrapperFocus:HTMLObserverFocusElement[]){  
    let focus = new Focus(wrapperFocus);
    window.onscroll = focus.verifyFocus.bind(focus);
}

export {changeStructureElement, executeFocus};