import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room, RoomData } from '../rooms/rooms';
import { emit } from 'process';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: RoomData[] = [];

  @Output() selectedRoom = new EventEmitter<RoomData>();

  constructor() {}

  ngOnInit(): void {}

  selectRoom(room : RoomData){
    this.selectedRoom.emit(room);
  }
}
