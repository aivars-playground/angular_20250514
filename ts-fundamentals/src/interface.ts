//DUCK typing

interface IF_Duck {
    walk: () => void
    swim: () => void
    quack: () => void
}

//object literal / record
let if_probablyDuck = {
    walk: () => console.log("walks"),
    swim: () => console.log("swims"),
    quack: () => console.log("quacks"),
}

function IF_Fly(bird: IF_Duck) {}

IF_Fly(if_probablyDuck)  //it is a IF_Duck



//optional properties


interface IF_BookWithOptional {
    id: number
    title: string
    issbn?: string
    pagecount: number
}

function  if_allBooks(): IF_BookWithOptional[] {
    return [
        {id: 1, title: "aaa", issbn: "112233",pagecount:20},
        {id: 2, title: "bbb", issbn: "444555",pagecount:100},
        {id: 3, title: "unknown", pagecount:100},
        //{id: 4, title: "damaged", pagecount:100, damage:true}     //not accepted, extra fields
        //{id: 5}                                                   //not accepted, missing mandatory fields
    ]
}



interface IF_Movie {
    title: string
    year: number
    length?: number
    addReview?: (review:string) => void
}

function IF_PrintInfo(movie: IF_Movie) {
    console.log(`${movie.title} - ${movie.year}`)
}

let if_exampleMovie = {
    title: 'aaaa',
    year: 2025,
    length: 100,
    random: 12121212
}
//acceptr wider shape (extra - random field)....
IF_PrintInfo(if_exampleMovie)


let if_exampleMovieNoYear = {
    title: 'cccc',
    random: 100
}
//IF_PrintInfo(if_exampleMovieNoYear)  // fails - missing a year

let if_exampleMovieNoLength = {
    title: 'fffffff',
    year: 2025,
}
IF_PrintInfo(if_exampleMovieNoLength) //length is optional




let if_exampleMovieWithReview: IF_Movie = {
    title: 'fffffff',
    year: 2025,
    //random:111, type is known, cannot add extra fields
    addReview: (review:string) => console.log(`adding review for ${review} `)
}



function IF_PrintReview(movie: IF_Movie) {
    if (movie.addReview) {
        movie.addReview(`cool movie ${movie.title}`)
    } else {
        console.log(`no review ${movie.title}`)
    }
}

IF_PrintReview(if_exampleMovieWithReview)
IF_PrintReview(if_exampleMovieNoLength)


///function types


console.log("***************************************************")
console.log("-----------function type, assign to value defined as arrow function")
console.log("***************************************************")

let reviewer_defined_as_fun: (movie: IF_Movie) => void
reviewer_defined_as_fun = IF_PrintReview
reviewer_defined_as_fun(if_exampleMovieWithReview)




console.log("***************************************************")
console.log("-----------function type, assign to value defined Interface??? functional if")
console.log("***************************************************")
interface Interface_ReviewGenerator {
    (movie: IF_Movie) : void
}
let reviewer_defined_as_interface: Interface_ReviewGenerator
reviewer_defined_as_interface = IF_PrintReview
reviewer_defined_as_interface(if_exampleMovieWithReview)




interface IF_REVIEW_LOGGER {
    (review:string):void
}

interface IF_Movie_REDEFINED {
    title: string
    year: number
    length?: number
    //addReview?: (review:string) => void
    addReview?: IF_REVIEW_LOGGER
}

let if_exampleMovieWithReview_redefined: IF_Movie_REDEFINED = {
    title: 'fffffff',
    year: 2025,
    //random:111, type is known, cannot add extra fields
    addReview: (review:string) => console.log(`adding review for ${review} `)
}

console.log("***************************************************")
console.log("-----------DUCKTYPE function defined as interface!!!!!!!!!!")
console.log("***************************************************")
//and ducktype  IF_Movie and IF_Movie_REDEFINED
IF_PrintReview(if_exampleMovieWithReview_redefined)



let if_anotherBiasedReview: IF_REVIEW_LOGGER
if_anotherBiasedReview = (review: string) => console.log("VERY BIASED:" + review)
if_anotherBiasedReview("----------original review")


console.log("***************************************************")
console.log("-----------COMPOSE INTERFACES")
console.log("***************************************************")

interface IF_ISSBN {
    issbn: string
}

interface IF_LIBTRACKER {
    uuid: string
}

interface IF_TRACKED_BOOK extends IF_ISSBN, IF_LIBTRACKER{
    location: string
}

let tracked_book: IF_TRACKED_BOOK = {
    issbn:"111",
    uuid: "aaaaa",
    location: "lost"
}


console.log("***************************************************")
console.log("-----------classes basics")
console.log("***************************************************")

interface IF_WORKER {
    doWork: () => void
}

class IF_GOOD_WORKER implements IF_WORKER {
    doWork(): void {
        console.log("--doing work")
    }
}

let IF_WORKER = new IF_GOOD_WORKER()
IF_WORKER.doWork()




