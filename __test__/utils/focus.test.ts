import { HTMLCommandElement } from "../../src/utils/command";
import Focus from "../../src/utils/focus";

let focus: Focus;
beforeAll(()=>{
    let contCommands = [];
    focus = new Focus(contCommands as HTMLCommandElement[]);
});
describe("parsed the class focus", ()=>{
    test("focus", ()=>{

    });
});