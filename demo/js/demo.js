function initApp(){
    let observer = document.querySelector(".command-observer-focus");
    observer.command.onfocus = handleFocus;
    observer.command.onlosefocus = handleLosefocus;
}
function handleFocus(e){
    console.log(e)
}
function handleLosefocus(e){
    console.log(e)
}

window.onload = initApp;