import { Component } from '@angular/core';

//using inline html/css
@Component({
  selector: 'styled-button',
  template: `<button>testme</button>`,
  styles: [`
      button {
        background-color: lightgray;
      }
  `]
})
export class ButtonComponent {

}
