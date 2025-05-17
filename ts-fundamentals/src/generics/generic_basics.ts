class BOOK{}

let bookarray: BOOK[]
let anotherBookArray: Array<BOOK> = new Array<BOOK>(5)


function WriteToConsole<T>(item: T):T {
    console.log(item)
    return item
}

WriteToConsole(1)
WriteToConsole("aaa")
WriteToConsole(anotherBookArray) //[ <5 empty items> ]

//let nr: number = WriteToConsole("aaa")   //nope WriteToConsole:string returns string
