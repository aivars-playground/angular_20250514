import {ES_THE_BEST_EMPLOYEE, ES_someFunction} from "./exporting_statement";
import aaaa from "./exporting_declatation"

console.log("aaaa is default exported item: " + aaaa.name)  // aaaa is an alias to ED_EmployeeDefault
console.log("----" + ES_THE_BEST_EMPLOYEE.name)

//not a module
// import {MY_CLASS_VISIBLE_EVREYWHERE, ES_someFunction} from "./not_a_module";
MY_CLASS_VISIBLE_EVREYWHERE //indeed, not defined in a module, visible everywhere


//relative import, exporting_statement is on a fs
//import {ES_THE_BEST_EMPLOYEE, ES_someFunction} from "./exporting_statement";

//non relative - looks outside the source code, seeks for module
//import * as $ from 'jquery'
//read module dependencies and resolution... check
//  resolver (in our case)  "module": "commonjs" in tsconfig
//commonjs is native to node: https://nodejs.org/api/modules.html


