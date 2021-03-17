class ContainerFocus implements ObserverFocus.ContainerFocus{
    constructor(
        private element:HTMLDivElement
    ){}
    onfocus = (e:ObserverFocus.EventContainer)=>{};
    onlosefocus = (e:ObserverFocus.EventContainer)=>{};
    get Element(){
        return this.element;
    }
};

function putStructureElement(divWrapperObserverFocus:HTMLDivElement[]):HTMLObserverFocusElement[]{
    let divObserverFocus:HTMLObserverFocusElement[] = [];
    for(let element of divWrapperObserverFocus){
        let divfocus = element as HTMLObserverFocusElement;
        divfocus.observerFocus = new ContainerFocus(element);
        divObserverFocus.push(divfocus);
    }
    return divObserverFocus;
};

export {ContainerFocus, putStructureElement};