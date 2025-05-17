import {promise_demo_getSomeData} from "./promise_demoapp";

//automatically returns Promise
async function doSlowTask() {
    let res = await promise_demo_getSomeData()
    console.log("RESULT----------------->"+res)
}

console.log("1) start-------")
doSlowTask()
console.log("3) end-------")


//automatically returns Promise
async function doSlowTask_catchError() {
    try {
        let res = await promise_demo_getSomeData()
        console.log("RESULT----------------->"+res)
    } catch (err) {
        console.log("slow task - errorred:",err)
    }
}


async function doSlowTask_handele_err() {
    let res = await promise_demo_getSomeData()
    console.log("RESULT----------------->"+res)
}

console.log("1) start-------")
doSlowTask_handele_err()
    .catch(err => console.log("---- async await promise errorred" + err))
console.log("3) end-------")
