import {
    getRange, 
    getPointDetect,
    hasFocus
} from "../../src/utils/utils";

let windowSpy:jest.SpyInstance<any>;
beforeAll(()=>{
    windowSpy = jest.spyOn(window, "window", "get");
});
describe("analyzing the behavior of functions", ()=>{
    let div = document.createElement("div");
    jest.spyOn(div, "offsetTop", "get").mockImplementation(()=>100);
    jest.spyOn(div, "clientHeight", "get").mockImplementation(()=>100);

    it("getRange: should calculate the distance of the element up and downs", ()=>{
        windowSpy.mockImplementationOnce(()=>({scrollY: 50}));
        let received = getRange(div as HTMLObserverFocusElement);
        expect(received).toEqual({minRange:50, maxRange:150});

        windowSpy.mockClear();
    });
    it("getPointDetect: should calculate half of screen", ()=>{
        windowSpy.mockImplementationOnce(()=>({innerHeight:200}));
        let received = getPointDetect();
        expect(received).toBe(100);

        windowSpy.mockClear();
    });
    it("hasFocus: should return true if the pointDetect is withing the range", ()=>{
        let pointDetect = 100;
        let range = {minRange:50, maxRange:150};
        let received = hasFocus(pointDetect, range);

        expect(received).toBe(true);
    });
});