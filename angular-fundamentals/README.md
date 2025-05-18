Angular Fundamentals
====================
* https://app.pluralsight.com/library/courses/fundamentals-angular

```shell
npm start
```
```shell
ng generate component home
```

component lifecycles
--------------------
https://v17.angular.io/guide/lifecycle-hooks
```
import { Component, OnInit, OnChanges } from '@angular/core';`
export class HomeComponent implements OnInit {
  ngOnInit():void {
    dosomething, (fetch data)
  }
}
``
