import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-navigate',
  templateUrl: './button-navigate.component.html',
})
export class ButtonNavigateComponent {

  @Input() rotate!: boolean

}
