let promise_firstPromise: Promise<string> = new Promise((
    resolve,
    reject
): void => {
    let data: string = 'got value'
    if (true)
        resolve(data)
    else
        reject('something went wrong')
})

promise_firstPromise
    .then(stringResult => console.log('ok:'+stringResult))
    .catch(reason => console.log('nok:'+reason))

