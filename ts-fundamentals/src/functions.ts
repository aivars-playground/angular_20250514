function funfunOptional(name: string, age?: number) {
    console.log(`name:${name} age:${age}->`)
}

funfunOptional('abc')
funfunOptional('abc',100)
funfunOptional('abc',undefined)

function funfunDefault(name: string, age: number = 9999 ) {
    console.log(`name:${name} age:${age}->`)
}
funfunDefault('abc')
funfunDefault('abc',100)

//nope.... optional with default... remove '?'
// function funfunOptionalDefault(name: string, age?: number = 9999 ) {
//     console.log(`name:${name} age:${age}->`)
// }

//nope.... optional in middle
// function funfunOptionalInMiddle(name: string, age?: number, address: string) {
//     console.log(`name:${name} age:${age}->`)
// }


//makes no sense... or does it... default makes it optional...
function funfunDefaultMiddle(name: string, age: number = 9999 , address: string) {
    console.log(`name:${name} age:${age} addr:${address}`)
}
funfunDefaultMiddle('abc', 123, 'aa')

//Restparameter  --- vararg in java
function funfunRestparameter(name: string, ...address: string[]) {
    console.log(`name:${name} address:${address}-> of length:${address.length}`)
}
funfunRestparameter('abc')
funfunRestparameter('abc', 'line1','line2','line3')


function funfunHandleOptionalInput(input?: string): undefined {
    if(input)
        console.log(`got: ${input}`)
    else
        console.log('nothing here')
}
funfunHandleOptionalInput()
funfunHandleOptionalInput('something')


function funfunHandleOptionalInput2(input?: string): undefined {
    console.log(`handling: ${input || 'unspecified data'}`)
}
funfunHandleOptionalInput2()
funfunHandleOptionalInput2('specified')




//arrows - lambdas

let fun_arrow = (x: number) => x * x

console.log(fun_arrow)          //[Function: fun_arrow]
console.log(fun_arrow(2))   //4


let fun_arrow_longer = (x: number) => {
    let sq = x * x
    return sq + 1
}
console.log(fun_arrow_longer(2))   //4


let fun_no_param_arrow = () => console.log('called fun_no_param_arrow...')
fun_no_param_arrow()


const fun_scores: number[] = [1,2,100,101]
let fun_highScores: number[]

fun_highScores = fun_scores.filter((elem, idx, array) => {
    if (elem >=100) {
        return true
    }
})
console.log('high scores:' + fun_highScores)

let fun_lowscores: number[]
fun_lowscores = fun_scores.filter(elem => elem <100)
console.log('low scores:' + fun_lowscores)


function fun_square(x: number): number {
    return x * x
}

const fun_arrow_square: (x: number) => number = fun_square

const fun_arrow_square2 =  (x: number) => x * x

const fun_arrow_square3: (x: number) => number =
        x => x * x

//ugly in ide...




//
//overloads

function fun_timestwo(nr: number): string
function fun_timestwo(txt: string): string
function fun_timestwo(property: any) {
    var fun_res: string = ''
    if (typeof property == 'string') {
        fun_res = property + property
    } else if (typeof property == 'number') {
        fun_res = `${property + property}`
    }
    return fun_res
}

console.log('timestwo 1 ->' + fun_timestwo(1))
console.log('timestwo a ->' + fun_timestwo('a'))
//console.log('timestwo true ->' + fun_timestwo(true)) nope


function fun_multi_item(nr: number): string
function fun_multi_item(nr: number, street:string): string
function fun_multi_item(nr: number, inUk:boolean, street:string): string
function fun_multi_item(nr: number,streetOrInUk?: any,street?:string): string {
    var fun_res: string = ''
    if (typeof streetOrInUk == 'string') {
        fun_res = `unknown ctry, street:${streetOrInUk}, nr:${nr}`
    } else if (typeof streetOrInUk == 'boolean' && typeof street =='string') {
        fun_res = `ctry UK:${streetOrInUk}, street:${street}, nr:${nr}`
    } else if (typeof streetOrInUk == undefined && typeof street ==undefined) {
        fun_res = `nr:${nr}`
    }
    return fun_res
}

console.log('nr 1 ->' + fun_multi_item(1))
console.log('nr 2 uk  line2->' + fun_multi_item(2, true, 'line2'))
console.log('nr 3 line3 ->' + fun_multi_item(3, 'line3'))

