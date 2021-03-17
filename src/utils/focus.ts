import {
    attachClassName,
    removeClassName,
    hasFocus,
    getRange,
    getPointDetect
} from "./utils";


function makeEvent(type: string, target: HTMLCommandElement):ContainerFocus.EventContainer{
    let event:ContainerFocus.EventContainer = {type, target};
    return event;
}

class Focus implements Focus.IFocus{
    private pointDetect: number;
    private focusedCont: HTMLCommandElement;
    private Event
    constructor(
        private contCommands:HTMLCommandElement[]
    ){
        this.focusedCont = this.contCommands[0];
        this.pointDetect = getPointDetect();
        this.discoverFocus();
    }
    discoverFocus(){
        for(let contcommand of this.contCommands){
            let range = getRange(contcommand);
            let result = hasFocus(this.pointDetect, range);
            if(result){
                if(this.focusedCont){
                    removeClassName(this.focusedCont);
                    let event = makeEvent('losefocus', contcommand);
                    this.focusedCont.command.onlosefocus(event);
                }
                this.focusedCont = contcommand;
                attachClassName(this.focusedCont);
                let event = makeEvent('focus', contcommand);
                this.focusedCont.command.onfocus(event);
                break;
            }
        }
    }
    verifyFocus(){
        let range = getRange(this.focusedCont as HTMLCommandElement);
        let result = hasFocus(this.pointDetect, range);
        if(!result){
            this.discoverFocus();
        }
    }
    get ContCommands(){
        return this.contCommands;
    }
}


export default Focus;