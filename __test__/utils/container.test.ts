import {putStructureElement, ContainerFocus} from "../../src/utils/container";

describe("changed structure element", ()=>{
    it("should be instance of ContainerFocus", ()=>{
        let div = document.createElement("div");
        let divElements = [div, div, div];
    
        let wrapperFocus = putStructureElement(divElements);

        expect(wrapperFocus[1].observerFocus).toBeInstanceOf(ContainerFocus);
    }); 
});