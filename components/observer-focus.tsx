import React, {useEffect} from 'react';
import { ContainerFocus } from '../utils/container';
import {genereUniqueID} from "../utils/utils";


function ObserverFocus({onfocus, onlosefocus, children}:Component.PropComponent){
    let id = genereUniqueID();
    useEffect(()=>{
        let observerFocus:ContainerFocus = { onfocus, onlosefocus};
        let wrapperObserver = document.querySelector(`.${id}`) as HTMLObserverFocusElement;
        wrapperObserver?.classList.add("wrapper-observer-focus");
        wrapperObserver.observerFocus = observerFocus;
    }, []);
    return (
        <>
            <section 
                className={id}
            >
                {children}
            </section>
        </>
    )
}

export {ObserverFocus};