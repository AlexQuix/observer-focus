import {changeStructureElement, executeFocus} from '../../src/index';


function execApp(){
    let wrapperObserverFocus = changeStructureElement(".wrapper-observer-focus");

    let observer = document.querySelector(".wrapper-observer-focus") as HTMLObserverFocusElement;
    observer.observerFocus.onfocus = handleFocus;
    observer.observerFocus.onlosefocus = handleLosefocus;

    executeFocus(wrapperObserverFocus);
}
function handleFocus(e){
    console.log(e)
}
function handleLosefocus(e){
    console.log(e)
}

window.onload = execApp;