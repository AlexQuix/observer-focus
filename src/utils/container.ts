class ContainerFocus{
    constructor(
        private element:HTMLDivElement
    ){}
    onfocus = (e:ContainerFocus.EventContainer)=>{};
    onlosefocus = (e:ContainerFocus.EventContainer)=>{};
};

function putStructureElement(contElements:HTMLDivElement[]):HTMLCommandElement[]{
    let contCommands:HTMLCommandElement[] = [];
    for(let contelement of contElements){
        let contcommand = contelement as HTMLCommandElement;
        contcommand.command = new ContainerFocus(contelement);
        contCommands.push(contcommand);
    }
    return contCommands;
};

export {ContainerFocus, putStructureElement};