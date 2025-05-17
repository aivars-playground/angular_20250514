class CL_MyItem {

    //one constructor
    constructor(name: string, lastName: string, middle?: string) {
        this.someValue = `${name} ${middle ? `${middle} ` : ''}${lastName}`
    }

    someValue: string
    static callCount: number = 0

    printMe(): void {
        CL_MyItem.callCount++
        console.log(this.someValue + '\t\tcallCount:' + CL_MyItem.callCount)
    }
}

let myClItem1: CL_MyItem = new CL_MyItem('first', 'last')
let myClItem2: CL_MyItem = new CL_MyItem('first', 'last', 'middle')

myClItem1.printMe()
myClItem2.printMe()
myClItem1.printMe()


myClItem1.someValue    //access instance property
CL_MyItem.callCount    //access class property



class CL_RestrictedAccess {

    static classPropertyPublic1: number = 1
    public static classPropertyPublic2: number = 2
    private static classPropertyPublic3: number = 3


    publicProperty1: number         = 1
    public publicProperty2: number  = 2

    private privateProperty1: number    = 1

    #privateField1: number = 1                  //nope - new to ecmascript 2020

    static accessStatclyMembers():void {
        CL_RestrictedAccess.classPropertyPublic1
        CL_RestrictedAccess.classPropertyPublic2
        CL_RestrictedAccess.classPropertyPublic3
    }

    accessMembers(): void {
        CL_RestrictedAccess.classPropertyPublic1
        CL_RestrictedAccess.classPropertyPublic2
        CL_RestrictedAccess.classPropertyPublic3

        CL_RestrictedAccess.accessStatclyMembers()

        this.publicProperty1
        this.publicProperty2
        this.privateProperty1
        this.#privateField1
    }
}

CL_RestrictedAccess.classPropertyPublic1
CL_RestrictedAccess.classPropertyPublic2
//CL_RestrictedAccess.classPropertyPublic3   //nope - private

let rest_class: CL_RestrictedAccess = new CL_RestrictedAccess()

rest_class.publicProperty1
rest_class.publicProperty2

//rest_class.privateProperty1               //nope - privater
//rest_class.#privateField1                 //nope



class CL_Accessors {
    private _supersecretIntetnal: string
    constructor(public name: string, private secret:string, supersecret: string) {
        this._supersecretIntetnal = supersecret
    }

    set supersecretIntetnal(newSupersecretIntetnal: string) {
        console.log('overwriting ' + this._supersecretIntetnal + ' with ' + newSupersecretIntetnal )
        this._supersecretIntetnal = newSupersecretIntetnal
    }

    get supersecretIntetnal(): string {
        return this._supersecretIntetnal
    }

    doSomething() {
        this.name
        this.secret
        this._supersecretIntetnal
        //this.supersecret nope, not defined
    }
}

let cl_my_accessor:CL_Accessors = new CL_Accessors("a","b","c")
cl_my_accessor.name
//cl_my_accessor.secret //nope - private

console.log("supersecret: " + cl_my_accessor.supersecretIntetnal)
cl_my_accessor.supersecretIntetnal = 'new secret'
console.log("supersecret: " + cl_my_accessor.supersecretIntetnal)

//INHERITANCE
console.log("---------------inheritance")

class CL_PARENT {
    publicMember1: number = 1
    protected protectedMember2: number = 2
    private protectedMember3:number =3
}

class CL_CHILD extends CL_PARENT {

    ch_publicMember1: number = 1
    protected ch_protectedMember2: number = 2
    private ch_protectedMember3:number =3
}

class CL_CHILD_WITH_CONSTRUCTOR extends CL_PARENT {

    constructor() {   //no args constructor, optional
        super();      //mandatory call
    }
    ch_publicMember1: number = 1
    protected ch_protectedMember2: number = 2
    private ch_protectedMember3:number =3
}

let cl_child1 = new CL_CHILD()
console.log(cl_child1.publicMember1)


class CL_PARENT_ANOTHER {
    constructor(public name: string) {
    }
    publicMember1: number = 1
    protected protectedMember2: number = 2
    private protectedMember3:number =3
}


class CL_CHILD_ANOTHER extends CL_PARENT_ANOTHER {

    constructor() {
        super("child");  //mandatory
    }

    ch_publicMember1: number = 1
    protected ch_protectedMember2: number = 2
    private ch_protectedMember3:number =3
}
