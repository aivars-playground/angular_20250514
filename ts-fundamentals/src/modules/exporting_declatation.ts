export function ED_someFunction(): void {}

export interface ED_Person {}
export class ED_Employee {}

export default class ED_EmployeeDefault {}
//default exported item, does not have to be named when importing
//https://www.amitmerchant.com/difference-between-export-and-export-default-in-typescript/

//export default class ED_EmployeeDefaultAnother {} nope... only one default item...

class ED_MANAGER {} //not exported (private to module

