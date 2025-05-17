import * as _ from "lodash"

let samples: Array<string> = Array.of("a","abc", "aabbccdd", "aa bb cc dd")

samples.forEach(item => console.log(item))
samples.forEach(item => console.log(_.toUpper(item)))
