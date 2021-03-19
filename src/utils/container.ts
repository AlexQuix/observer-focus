class ContainerFocus implements ObserverFocus.ContainerFocus{
    constructor(onfocus?:(e:ObserverFocus.EventContainer)=>void, onlosefocus?:(e:ObserverFocus.EventContainer)=>void){
        if(onfocus){
            this.onfocus = onfocus;
        }
        if(onlosefocus){
            this.onlosefocus = onlosefocus;
        }
    }
    onfocus = (e:ObserverFocus.EventContainer)=>{};
    onlosefocus = (e:ObserverFocus.EventContainer)=>{};
};

function putStructureElement(divWrapperObserverFocus:HTMLDivElement[]):HTMLObserverFocusElement[]{
    let divObserverFocus:HTMLObserverFocusElement[] = [];
    for(let element of divWrapperObserverFocus){
        let divfocus = element as HTMLObserverFocusElement;
        divfocus.observerFocus = new ContainerFocus();
        divObserverFocus.push(divfocus);
    }
    return divObserverFocus;
};

export {ContainerFocus, putStructureElement};