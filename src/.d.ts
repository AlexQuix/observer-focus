declare namespace ContainerFocus{
    declare class ContainerFocus{
        private element:HTMLDivElement
        constructor(element:HTMLDivElement);
        onfocus:(e:ContainerFocus.EventContainer)=>void;
        onlosefocus:(e:ContainerFocus.EventContainer)=>void;
    }
    declare interface EventContainer{
        type: string;
        target: HTMLCommandElement;
    }
}

declare namespace Focus{
    declare interface IFocus{
        verifyFocus:()=>void;
        discoverFocus: ()=>void;
        onfocus?:()=>void;
        onlosefocus?:()=>void
    }
}

declare namespace Component{
    interface PropComponent{
        onfocus?:(e:ContainerFocus.EventContainer)=>void;
        onlosefocus?:(e:ContainerFocus.EventContainer)=>void;
        children?:any;
    }
}

declare type HTMLCommandElement = {command:Command} & HTMLDivElement;