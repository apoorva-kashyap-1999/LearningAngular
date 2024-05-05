import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Room, RoomData } from '../rooms/rooms';
import { emit } from 'process';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomData[] = [];
  @Input() title:string='';

  @Output() selectedRoom = new EventEmitter<RoomData>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  selectRoom(room : RoomData){
    this.selectedRoom.emit(room);
  }
}
