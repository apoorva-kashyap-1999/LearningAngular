 import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
    selector: 'app-root',
    // standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    // imports: [RouterOutlet, RoomsComponent]
    //  imports: [RoomsComponent]
})
export class AppComponent {
  title = 'hotelInventoryApp';
  loginRole = 'Users'
}
