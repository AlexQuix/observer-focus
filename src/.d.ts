declare namespace ObserverFocus{
    declare class ContainerFocus{
        constructor(element:HTMLDivElement);
        onfocus:(e:ContainerFocus.EventContainer)=>void;
        onlosefocus:(e:ContainerFocus.EventContainer)=>void;
    }
    declare interface EventContainer{
        type: string;
        target: HTMLObserverFocusElement;
    }
}

declare namespace Focus{
    declare interface IFocus{
        verifyFocus:()=>void;
        discoverFocus: ()=>void;
        focusingContainer: (element: HTMLObserverFocusElement)=>void;
    }
}

declare namespace Component{
    interface PropComponent{
        onfocus?:(e:ContainerFocus.EventContainer)=>void;
        onlosefocus?:(e:ContainerFocus.EventContainer)=>void;
        children?:any;
    }
}

declare type HTMLObserverFocusElement = {observerFocus:ObserverFocus.ContainerFocus} & HTMLDivElement;