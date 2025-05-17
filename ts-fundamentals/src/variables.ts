let myVal: string = 'let value'
var myVar: string = 'var value'
const myConst:string = 'const value'
console.log(myVal + ' ' + myVar + ' ' + myConst)

myVal = 'new'
myVar = 'new'
//myConst = 'new'                       //nope

//var myVal = 'something else'          //nope
var myVar = 'something else'

//var scoping rules: https://www.typescriptlang.org/docs/handbook/variable-declarations.html

//let vsi var: let is more 'traditional', is not accessiblko utside of the scope, should be declared before using
//const vs let: const is let that cannot change

let myWeakType1
myWeakType1 = 1
myWeakType1 = 'one'

let myStrongType: string = 'one'
//myWithType = 1   nope

function myFunWithValues(): void {
    var myFunVal = 1
    let myFunLet = 2
    const myFunConst = 3
}

let myTitle = 'lalala'
console.log(`movie: ${myTitle}`)

//--------------------------------
function myVoidType(): void {
    console.log('returns nothing')
}
function myVoidType2(): void {
    return
}
console.log('void:'+ myVoidType2())  //void:undefined


function myNullType(): null {
    return null
}

function myUndefined(): undefined {
    return
}
console.log('undefined:'+ myUndefined()) //undefined:undefined

function myNever(): never {
    throw new Error('never ever');
}

function myAny(): any {
    return 'do not care, ignore4 typechecking'
}

function myAny1(): any {
    return 1
}

function myAny2(): any {
    return
}
//any good when using non type checked library

// void vs undefined



function aNumberCallback(): number {
    return 1;
}

function myDoSomethingAny(callback: () => any) {}
myDoSomethingAny(aNumberCallback)

function myDoSomethingVoid(callback: () => void) {}
myDoSomethingVoid(aNumberCallback)
myDoSomethingVoid(myNever)
myDoSomethingVoid(myNullType)

function myDoSomethingUndefined(callback: () => undefined) {}
//myDoSomethingUndefined(aNumberCallback)  //fails, type safety
myDoSomethingUndefined(myUndefined)
myDoSomethingUndefined(myNever) //works
myDoSomethingUndefined(myUndefined)


//https://medium.com/geekculture/void-in-javascript-and-typescript-a-beginners-introduction-bf20bb44f70c
//void - indicates that do not return meaningful value??? ignore???
// Undefined - stricter requirement - explicitly return undefined
//void example - on input definition will ignore



/// unions
let myUnion: number|string;
myUnion = 1
myUnion = 'one'
//myUnion = true nope


//nullchecks   --strictNullChecks enabled
let myRealString: string
//myRealString = null           nope
//myRealString = undefined      nope

let myNullableString: string | null
myNullableString = null
//myNullableString = undefined nope

let myWhateverString: string | null | undefined
myWhateverString = null
myWhateverString = undefined


//
//arrays, two syntaxes (second - generics)
let myStringArray1: string[] = ['a', 'b', 'c']
let myStringArray2: Array<string> = ['a', 'b', 'c']

{
    let v_a = 1
    var v_b = 2
}
//console.log(v_a)  //do not see
console.log(v_b)    //see inside the scope


