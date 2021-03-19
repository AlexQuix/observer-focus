import {Focus, makeEvent, throwEvent} from "../../src/utils/focus";
import {putStructureElement} from "../../src/utils/container";

let focus: Focus;
let wrapperFocus: HTMLObserverFocusElement[];

beforeAll(()=>{
    let div = document.createElement("div");
    let listDiv = [div, div, div];
    wrapperFocus = putStructureElement(listDiv);

    focus = new Focus(wrapperFocus as HTMLObserverFocusElement[]);
});
describe("parsed the focus class", ()=>{
    it("should make a eventFocus", ()=>{
        let event = makeEvent("focus", wrapperFocus[0]);
        let expected = {
            type: "focus",
            target: wrapperFocus[0]
        };
        expect(event).toEqual(expected);
    });
    it("should execute the focus event", ()=>{
        let wrapperfocus = wrapperFocus[0];

        let mockOnFocus = jest.fn(wrapperfocus.observerFocus.onfocus);
        mockOnFocus.mockImplementation(()=>"received");
        wrapperfocus.observerFocus.onfocus = mockOnFocus;

        throwEvent(wrapperfocus, "focus");
        let event = {
            type: "focus",
            target: wrapperfocus
        };

        expect(mockOnFocus).toHaveBeenCalled();
        expect(mockOnFocus.mock.calls[0][0]).toStrictEqual(event)
        expect(mockOnFocus.mock.results[0].value).toBe("received");
    });
});