import { Component, Input, OnInit } from '@angular/core';
import { Room , RoomData } from '../rooms/rooms';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent implements OnInit{

  @Input() rooms:RoomData[]=[];

constructor() {}

ngOnInit(): void {  }

}
