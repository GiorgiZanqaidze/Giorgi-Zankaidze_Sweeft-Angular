import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-navigate',
  templateUrl: './button-navigate.component.html',
  styleUrls: ['./button-navigate.component.css']
})
export class ButtonNavigateComponent {

  @Input() rotate!: boolean

}
