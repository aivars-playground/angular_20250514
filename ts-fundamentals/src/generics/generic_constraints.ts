interface CS_CatalogItem {
    catalogNumber: number
}

interface CS_Inventory<T> {
    getItemByCatalogNumber: (nr: number) => T | undefined
    add(item:T): void
}

class CS_Catalog<T extends CS_CatalogItem> implements CS_Inventory<T> {

    private _items: Array<T> = new Array<T>()

    getItemByCatalogNumber(nr: number): T | undefined {
        return this._items.filter((item) => item.catalogNumber == nr).pop()
    }

    add(item: T): void {
        this._items.push(item)
    }
}

let cs_Catalog = new CS_Catalog()
cs_Catalog.add({catalogNumber:1})
cs_Catalog.add({catalogNumber:2})
console.log("----item1:" + cs_Catalog.getItemByCatalogNumber(1)?.catalogNumber?.toString())
console.log("----item100:" + (cs_Catalog.getItemByCatalogNumber(100)?.catalogNumber?.toString() || "NOT FOUND"))