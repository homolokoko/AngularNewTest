import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  public showContent = false;
  public showFiller = false;

  public maxWidth = 0;

  @Input('name') public myname: any;
  @Output() public childfooter = new EventEmitter();
  onClick(){
    this.childfooter.emit('Hello');
  }
  
};
