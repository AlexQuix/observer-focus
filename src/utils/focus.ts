import {
    attachClassName,
    removeClassName,
    hasFocus,
    getRange,
    getPointDetect
} from "./utils";


function makeEvent(type: string, target: HTMLObserverFocusElement):ObserverFocus.EventContainer{
    let event:ObserverFocus.EventContainer = {type, target};
    return event;
}
function throwEvent(element:HTMLObserverFocusElement, type:string){
    let event = makeEvent(type, element);
    switch(type){
        case "losefocus":
            if(element.observerFocus.onlosefocus){
                element.observerFocus.onlosefocus(event);
            }
        break;
        case "focus":
            if(element.observerFocus.onfocus){
                element.observerFocus.onfocus(event);
            }
        break;
    }
}

class Focus implements Focus.IFocus{
    private pointDetect: number;
    private contFocused: HTMLObserverFocusElement;
    constructor(
        private divObserverFocus:HTMLObserverFocusElement[]
    ){
        this.contFocused = this.divObserverFocus[0];
        this.pointDetect = getPointDetect();
        this.discoverFocus();
    }

    focusingContainer(element:HTMLObserverFocusElement){
        if(this.contFocused){
            removeClassName(this.contFocused);
            throwEvent(this.contFocused, "losefocus");
        }
        this.contFocused = element;
        attachClassName(this.contFocused);
        throwEvent(this.contFocused, "focus");
    }
    discoverFocus(){
        for(let element of this.divObserverFocus){
            let range = getRange(element);
            let result = hasFocus(this.pointDetect, range);
            if(result){
                this.focusingContainer(element);
                break;
            }
        }
    }
    verifyFocus(){
        let range = getRange(this.contFocused as HTMLObserverFocusElement);
        let result = hasFocus(this.pointDetect, range);
        if(!result){
            this.discoverFocus();
        }
    }
    get DivObserverFocus(){
        return this.divObserverFocus;
    }
}


export default Focus;