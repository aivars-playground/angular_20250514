interface abs_INTERFACE {
    name: string
    doPrint(): void
}

abstract class abs_CLASS_with_abstract_method implements abs_INTERFACE{
    abstract name: string;              //from interface
    abstract getAgeToDate(): number     //define here

    doPrint(): void {                   //implemrnt here
        console.log("name:"+this.name + " age:" + this.getAgeToDate())
    }
}

class ABS_Concrete_Person extends abs_CLASS_with_abstract_method {
    constructor(public name: string, private dob: string) {
        super();
    }
    getAgeToDate(): number {
        console.log("---calculate age from " + this.dob + " to now for " + this.name + "---> 999"  )
        return 999;
    }
}

let abs_person = new ABS_Concrete_Person("name", "dob")
abs_person.doPrint()
