for (let i=1; i<=10; i++) {
    if (i % 2 == 0) {
        console.log(`i=${i}`)
    } else {
        //
    }
}

let c_i = 10
while (c_i<=25) {
    //like in java,, needs breaks
    switch (c_i) {
        case 17:
            console.log('over 17:' + +c_i)
        case 18:
            console.log('over 18:' +c_i)
        case 21:
            console.log('over 21:' +c_i)
            break
        default:
            //
    }
    c_i++;
}


function c_explainRating(rating: string | number) {
    if (typeof(rating) == 'string')
        console.log('string rating:'+rating)
    else if (typeof(rating) == 'number')
        console.log('numeric rating:'+rating)
}

c_explainRating('A+')
c_explainRating(10)


