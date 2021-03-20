import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import {ObserverFocus, ContainerObserverFocus} from "../../../src/components";

function Card(){
    function onfocus(e:ObserverFocus.EventContainer){
        let div = e.target.querySelector("div") as HTMLDivElement;
        div.style.background = "black";
    }
    function onlosefocus(e:ObserverFocus.EventContainer){
        let div = e.target.childNodes[0] as HTMLDivElement;
        div.style.background = "red";
    }
    return (
        <>
            <ObserverFocus
                onfocus={onfocus}
                onlosefocus={onlosefocus}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100vh",
                        background: "red"
                    }}
                >
                </div>
            </ObserverFocus>
        </>
    )
}
function Home(){
    return (
        <div>
            <h1>Hola mundo</h1>
            <ContainerObserverFocus>
                <Card/>
                <Card/>
                <Card/>
            </ContainerObserverFocus>
        </div>
    )
}

ReactDOM.render(<Home/>, document.getElementById("root"));
