class INH_PARENT {
    static st_pub: number = 1
    protected static st_prot:number = 2
    private static st_priv: number = 3

    pub: number = 4
    protected prot:number = 5
    private priv: number = 6

    doPub(): number { return 7}
    protected doProt(): number { return 8}
    private doPrivt(): number { return 9}


    doPrint(): void {
        console.log(INH_PARENT.st_pub)
        console.log(INH_PARENT.st_prot)
        console.log(INH_CHILD.st_priv)   //does not like this

        console.log(this.pub)
        console.log(this.prot)
        console.log(this.priv)           //does not like this

        console.log(this.doPub())
        console.log(this.doProt())
        console.log(this.doPrivt())
    }
}

class INH_CHILD extends INH_PARENT {
    static st_pub: number = 101
    protected static st_prot:number = 102
    //private static st_priv: number = 103      //does not like this

    pub: number = 104
    protected prot:number = 105
    //private priv: number = 106                     //does not like this

    doPub(): number { return 107}
    protected doProt(): number { return 108}
    //private doPrivt(): number { return 109}            //does not like this

    doPrint(): void {
        console.log(INH_CHILD.st_pub)
        console.log(INH_CHILD.st_prot)
        //console.log(INH_CHILD.st_priv)   //does not like this

        console.log(this.pub)
        console.log(this.prot)
        //console.log(this.priv)           //does not like this

        console.log(this.doPub())
        console.log(this.doProt())
        //console.log(this.doPrivt())
    }

    doPrintSuper(): void {
        console.log(INH_PARENT.st_pub)
        console.log(INH_PARENT.st_prot)
        //console.log(INH_PARENT.st_priv)   //does not like this

        //console.log(super.pub)
        //console.log(super.prot)
        //console.log(this.priv)           //does not like this

        console.log(super.doPub())
        console.log(super.doProt())
        //console.log(this.doPrivt())
    }

    doPrintParent(): void {
        super.doPrint()
    }
}

let inh_ch: INH_CHILD = new INH_CHILD()
console.log("ch-self")
inh_ch.doPrint()
console.log("ch-super")
inh_ch.doPrintSuper()
console.log("ch-parent-print")
inh_ch.doPrintParent()


console.log("ch-to-parent-if")
let inh_child_2_parent: INH_PARENT = new INH_CHILD()
inh_child_2_parent.doPrint()
console.log("ch-to-parent--to-child-if")
let inh_child_2_parent_2_ch: INH_CHILD = inh_child_2_parent as INH_CHILD
inh_child_2_parent_2_ch.doPrint()
