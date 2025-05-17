interface G_Inventory<T> {
    getFirstItem: () => T | undefined
    addItem: (newItem: T) => void
    getAllItems: () => Array<T>
}

class  G_Catalog<T> implements G_Inventory<T> {
    addItem(newItem: T): void {
    }

    getAllItems(): Array<T> {
        return Array.of();
    }

    getFirstItem(): T | undefined {
        return undefined;
    }

}

class G_BOOK {}

let GBookCatalog: G_Catalog<G_BOOK> = new G_Catalog<G_BOOK>

