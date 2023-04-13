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

  public showFiller = false;

  public maxWidth = 0;

  @Input('name') public myname: any;
  @Output() public showContent = new EventEmitter();

  @Output() public showSidenav(){
    this.showFiller = !this.showFiller;
    this.showContent.emit(this.showFiller);
  }
  
};
