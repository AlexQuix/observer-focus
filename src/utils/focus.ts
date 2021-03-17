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
    discoverFocus(){
        for(let element of this.divObserverFocus){
            let range = getRange(element);
            let result = hasFocus(this.pointDetect, range);
            if(result){
                if(this.contFocused){
                    removeClassName(this.contFocused);
                    let event = makeEvent('losefocus', element);
                    this.contFocused.observerFocus.onlosefocus(event);
                }
                this.contFocused = element;
                attachClassName(this.contFocused);
                let event = makeEvent('focus', element);
                this.contFocused.observerFocus.onfocus(event);
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