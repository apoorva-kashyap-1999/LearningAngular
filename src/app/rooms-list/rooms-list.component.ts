import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Room, RoomData } from '../rooms/rooms';
import { emit } from 'process';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: RoomData[] = [];
  @Input() title:string='';

  @Output() selectedRoom = new EventEmitter<RoomData>();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('on destroy');
   } 

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title= changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room : RoomData){
    this.selectedRoom.emit(room);
  }

  hideRoomList = false;
}
