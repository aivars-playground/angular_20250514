export {promise_demo_getSomeData}

function promise_demo_getSomeData(): Promise<string> {
    let p: Promise<string> = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve("SOME DATA ")
            }, 2000)
        }
    )
    return p
}

console.log("1) start-------")
promise_demo_getSomeData()
    .then(res => console.log('2) ---returned----' + res))
    .catch(err => console.log('2) ---err----' + err))
console.log("3) end-------")

//sequence:
//1) start-------
//3) end-------
//2) ---returned----SOME DATA