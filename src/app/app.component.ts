import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  // template: '<h1>Hello world</h1>',
  styleUrl: './app.component.css',
  // imports: [RouterOutlet, RoomsComponent]
  //  imports: [RoomsComponent]
})
export class AppComponent implements OnInit
// AfterViewInit
 {
  title = 'hotelInventoryApp';
  loginRole = 'Admin';

  // // ViewContainerRef- helps in loading a component dynamically
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   console.log('on init in app');
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  // }
  ngOnInit(){
    this.name.nativeElement.innerText = ' I am  div from view child ';
    // console.log(this.name);
  }

  @ViewChild('name', {static:true}) name!: ElementRef;
}
