import {logInfoDecorator} from "./decorator";

class MyClassToBeDecorated {

    @logInfoDecorator
    printStatus(): void {
        console.log("ok")
    }
}

let DecoratedClass = new MyClassToBeDecorated()
DecoratedClass.printStatus()