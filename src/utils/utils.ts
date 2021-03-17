let reduce = (acummulator:any, cb:(value:any)=>any)=>cb(acummulator);


const queryDocument = (selector:string)=>{
    let contElements:unknown = document.querySelectorAll<HTMLDivElement>(selector);
    return contElements as HTMLDivElement[];
};


function attachClassName(element:HTMLCommandElement){
    element.classList.add("command-focus");
};
function removeClassName(element:HTMLCommandElement){
    element.classList.remove("command-focus");
};


function hasFocus(pointDetect:number, range:{minRange:number, maxRange:number}):boolean{
    let {minRange, maxRange} = range;
    if(Math.sign(minRange) === -1){
        return false;
    }
    if(pointDetect >= minRange && pointDetect <= maxRange){
        return true;
    }
    return false;
}
function getRange(element:HTMLCommandElement){
    let minRange = element.offsetTop - window.scrollY;
    let maxRange = element.clientHeight + minRange;
    return{minRange, maxRange};
}
function getPointDetect():number{
    return window.innerHeight / 2;
}


export {
    reduce,
    queryDocument,
    attachClassName,
    removeClassName,
    hasFocus,
    getRange,
    getPointDetect
};