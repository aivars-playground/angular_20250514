TYPESCRIPT-FUNDAMENTALS
=======================
*/courses/typescript-5-fundamentals
https://www.typescriptlang.org/docs/handbook/intro.html
----

* install globally and set a project with defaults (tsconfig)
* edit tsconfig
```shell
npm install -g typescript
tsc --init
```

*compile in watch mode
```shell
 tsc --watch
```

*run app
```shell
 node ./target/app.js
```

libraries
=========
when including javascript library in TS project, a type declaration is needed
(map javascript to ts and include type information, extension - d.ts)
https://www.npmjs.com/package/@angular/core - "search for typescript logo"
https://definitelytyped.org/                - "community"

install with node (@types organisation)


example
=======
https://lodash.com/      lower dash...  `_.toUpper()` syntax
https://www.npmjs.com/package/lodash
https://www.npmjs.com/package/@types/lodash
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/c89689ced68f4a69e6b7b6973415abacfab57dc9/types/lodash/readme.md

```shell
npm install lodash
npm install @types/lodash
```
* see ./node_modules and ./package*.json

!!! note - sometimes developed by other developers... could have incompatability due to versioning (js / ts)

DEBUG
=====
intellij automatically debugs ts file launch

how to debug compilled (app.js launch???)
```shell
node ./target/app.js
```

* enable source map
```shell
tsc --sourceMap
```
enable `"sourceMap": true`, in tsconfig
```shell
tsc
```
check ./target  , *.js and *.js.map

set debug point
configure intellij launcher to start node compiled ./target/app.js
launch in debug mode in Intellij

troubleshoot
------------
if debuger does not stop, check if *.js.map files are generated

