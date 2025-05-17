///class expressoions

class CL_IF_AAAAA {
    constructor(public name: string) {
    }
    age?:number
}

let CL_EXPRESSION = class extends CL_IF_AAAAA {
    printme(): void {
        console.log("--name:"+this.name + " --age:"  + this.age)
    }
}

let cl_newInstance = new CL_EXPRESSION("name")
cl_newInstance.age = 22222

//added new functionality
cl_newInstance.printme()


//extremes
class CL_EXTENDED extends class { firstName:String = "main class name"} {
    //extension
    lastName: String = "extended class last name"
    printme(): void {
        console.log("--name:"+this.firstName + " --age:"  + this.lastName)
    }
}

let cl_extended = new CL_EXTENDED()
cl_extended.printme()

