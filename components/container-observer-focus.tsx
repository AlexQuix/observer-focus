import React, {useEffect} from "react";
import {executeFocus} from "../index";

function CustomWebComponent(){
    useEffect(()=>{
        setTimeout(()=>{
            let wrapperObserverFocus:unknown = document.querySelectorAll(".wrapper-observer-focus");
            executeFocus(wrapperObserverFocus as HTMLObserverFocusElement[]);
        }, 50);
    }, []);
    return (
        <div>
            <h1>Web Component, instalado</h1>
        </div>
    )
};
function ContainerObserverFocus({children}){
    return (
        <div>
            {children}
            <CustomWebComponent/>
        </div>
    )
}


export {ContainerObserverFocus};