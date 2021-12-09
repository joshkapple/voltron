import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from "@voltron/ui"

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-button-implementation',
  templateUrl: '../../../../../../libs/ui/src/lib/button/button.component.html', // TODO path is a little clunky
  styleUrls: ['../../../../../../libs/ui/src/lib/button/button.css']
})
export class ButtonImplementationComponent extends ButtonComponent implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

}
